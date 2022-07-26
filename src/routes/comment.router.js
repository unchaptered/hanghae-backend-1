import { Router } from 'express';
import {
    getComment, createComment,
    putCommentById, deleteCommentById
} from '../layers/controllers/comment.controller.js';

const commentRouter = Router();


commentRouter.route('')
    .get(getComment)
    .post(createComment)

commentRouter.route('/:id')
    .put(putCommentById)
    .delete(deleteCommentById)

export default commentRouter;