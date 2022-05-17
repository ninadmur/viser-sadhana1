import express from 'express';
import { postlogin, postSignUp } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', postSignUp);

router.post('/login', postlogin);

export default router;
