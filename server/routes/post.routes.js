import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();


router.route('/posts').get(PostController.getPosts);
router.route('/posts/:cuid').get(PostController.getPost);
router.route('/posts').post(PostController.addPost);
router.route('/posts/:cuid').delete(PostController.deletePost);
router.route('/posts/download-image').post(PostController.downloadImage);

export default router;
