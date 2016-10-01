import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import passportService from '../services/passport';
import passport from 'passport';
const router = new Router();

const requireAuth = passport.authenticate('jwt', { session: false });

router.route('/posts').get(PostController.getPosts);
router.route('/posts/:cuid').get(PostController.getPost);
router.route('/posts').post(requireAuth, PostController.addPost);
router.route('/posts/:cuid').delete(PostController.deletePost);
router.route('/posts/:cuid/add-comment').post(requireAuth, PostController.addComment);

export default router;
