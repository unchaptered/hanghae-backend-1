import { Router } from 'express';

const postRouter = Router();


postRouter.route('/')
    .get()
    .post()
    .put()
    .delete()

postRouter.route('/:id')
    .get()

export default postRouter;