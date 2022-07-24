import { Router } from 'express';
import { 
    getPostsByQuery, createPost,
    getPostById, putPostById, deletePostById
} from '../controllers/post.controller.js';

const postRouter = Router();

postRouter.route('')
    .get(getPostsByQuery)
    .post(createPost);

postRouter.route('/:id')
    .get(getPostById)
    .put(putPostById)
    .delete(deletePostById);

export default postRouter;