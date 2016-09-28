import Post from '../models/post';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';
import fs from 'fs';
import formidable from 'formidable';
import path from 'path';

/**
 * Get all posts
 *
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Post.find({}, { content: 0 }).sort('-dateAdded').limit(5).exec((err, allPosts) => {
    if (err) {
      res.status(500).send(err);
    }

    Post.find({}, { content: 0, preview: 0 }).sort('-viewsCounter').limit(3).exec((err, popularPosts) => {
      if (err) {
        res.status(500).send(err);
      }

      Post.findRandom({}, { content: 0, preview: 0 }, { limit: 3 }, function (err, randomPosts) {
        if (err) {
          res.status(500).send(err);
        }

        res.json({
          allPosts,
          popularPosts,
          randomPosts
        });
      });
    });
  });
}

/**
 * Save a post
 *
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {

  const form = new formidable.IncomingForm();
  const fields = {};
  let fileName = '';

  form.multiples = false;
  form.uploadDir = path.join(__dirname, '/../images/posts');

  form.on('field', function(field, value) {
    fields[field] = value;
  });

  form.on('file', function(field, file) {
    const fileFormat = file.name.split('.').pop();
    // generate unique name for file
    fileName = cuid() + '.' + fileFormat;

    file.name = fileName;
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  form.on('error', function(err) {
    res.end(err);
  });

  form.on('end', function() {

    if (!fields.title || !fields.preview || !fields.content || !fileName) {
      res.status(403).end();
    }

    const newPost = new Post();
    newPost.cuid = cuid();
    newPost.user = {
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      avatarUrl: req.user.avatarUrl
    };

    newPost.title = sanitizeHtml(fields.title);
    newPost.preview = sanitizeHtml(fields.preview);
    newPost.content = sanitizeHtml(fields.content);

    let tags = [];
    fields.tags = JSON.parse(fields.tags);
    for (let prop in fields.tags) {
      if (fields.tags.hasOwnProperty(prop)) {
        tags.push(fields.tags[prop]);
      }
    }

    newPost.tags = tags;
    newPost.coverUrl = fileName;

    newPost.save((err, saved) => {
      if (err) {

        res.end(err);
      }
      res.json({ post: saved });
    });
  });

  form.parse(req);
}

/**
 * Get a single post
 *
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.viewsCounter =  ++post.viewsCounter;
    post.save(function(err) {
      if (err) {
        res.status(500).send(err);
      }

      res.json({ post });
    });

  });
}

/**
 * Delete a post
 *
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
