import Post from '../models/post';
import cuid from 'cuid';
import slug from 'limax';
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
  Post.find({}, { content: 0 }).sort('-dateAdded').limit(5).exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
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
      avatar_url: req.user.avatar_url
    };
    newPost.title = sanitizeHtml(fields.title);
    newPost.preview = sanitizeHtml(fields.preview);
    newPost.content = sanitizeHtml(fields.content);
    newPost.cover_url = fileName;

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
    res.json({ post });
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
