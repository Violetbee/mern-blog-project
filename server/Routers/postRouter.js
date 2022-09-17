import { Router } from 'express';
import checkAuth from '../Middlewares/auth.js';

import {
  getPosts,
  newPost,
  deletePosts,
} from '../Controllers/postController.js';

const router = Router();

router.get('/', getPosts);

router.post('/create', checkAuth, newPost);

router.post('/delete', checkAuth, deletePosts);

export default router;
