import { Router } from 'express';

const commentRouter = Router();

commentRouter.route('/')
    .get()
    .post()

commentRouter.route('/:id')
    .put()
    .delete()

export default commentRouter;