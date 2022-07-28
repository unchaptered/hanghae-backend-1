import { Router } from 'express';
import {
    getComment, createComment,
    putCommentById, deleteCommentById
} from '../layers/comment/comment.controller.js';

const commentRouter = Router();


commentRouter.route('')
    .get(getComment)
    .post(createComment)

commentRouter.route('/:id')
    .put(putCommentById)
    .delete(deleteCommentById)

export default commentRouter;