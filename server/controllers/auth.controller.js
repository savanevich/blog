import Post from '../models/post';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
import jwt from 'jwt-simple';
import User from '../models/user';
import config from '../config';

function tokenForUser(user) {
  const timestamp = new Date().getTime();

  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

/**
 * Sign in user
 *
 * @param req
 * @param res
 * @param next
 * @returns void
 */
export function signIn(req, res, next) {
  res.send({ token: tokenForUser(req.user) });
}

/**
 * Sign up user
 *
 * @param req
 * @param res
 * @param next
 * @returns void
 */
export function signUp(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422)
      .send({ error: 'You must provide email and password'});
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use'});
    }

    const user = new User({
      email: email,
      password: password
    });

    user.save((err) => {
      if (err) {
        return next(err);
      }

      res.json({ token: tokenForUser(user) });
    });
  });
}

