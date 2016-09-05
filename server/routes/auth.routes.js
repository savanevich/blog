import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
import passportService from '../services/passport';
import passport from 'passport';
const router = new Router();

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.route('/signin').post(requireSignin, AuthController.signIn);
router.route('/signup').post(AuthController.signUp);


export default router;
