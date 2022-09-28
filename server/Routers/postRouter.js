import { Router } from 'express';
import checkAuth from '../Middlewares/auth.js';

import {
  getPosts,
  newPost,
  deletePosts,
  getPostsById,
  handleLike,
} from '../Controllers/postController.js';

const router = Router();

router.get('/', getPosts);

router.get('/:userId', getPostsById);

router.post('/like', checkAuth, handleLike);

router.post('/create', checkAuth, newPost);

router.post('/delete', checkAuth, deletePosts);

export default router;
