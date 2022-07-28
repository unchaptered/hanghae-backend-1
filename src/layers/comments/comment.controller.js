import * as commentService from './controllers/comment.service.js';

import { FormFactory } from '../../modules/_.lodaer.js';


export async function getComment(req, res) {

    const formFactory = new FormFactory();

    try {

        const {
            body: { postId },
            query: { sort }
        } = req;

        if (!postId) return res.status(400).json({
            isSuccess: false,
            message: 'postId 가 전달되지 않았습니다.',
            result: {}
        });

        const result = await commentService.getComment(postId, sort);

        return res.status(201).json(
            formFactory.getSuccessForm('댓글 조회가 완료되었습니다.', result));

    } catch(err) {

        res.locals.error = err;
        res.locals.formFactory = formFactory;

        return next();

    }

}
export async function createComment(req, res) {

    const formFactory = new FormFactory();
    
    try {

        const { postId, context } = req.body;

        if (!postId) return res.status(400).json({
            isSuccess: false,
            message: 'postId 가 전달되지 않았습니다.',
            result: {}
        });

        if (!context) return res.stataus(400).json({
            isSuccess: false,
            message: "댓글 내용을 입력해주세요",
            result: {}
        });

        const [ post, comment ] = await commentService.createComment(postId, context);

        return res.status(201).json(
            formFactory.getSuccessForm('댓글 작성에 성공하셨습니다.', { post, comment }));

    } catch(err) {

        res.locals.error = err;
        res.locals.formFactory = formFactory;

        return next();

    }

}

export async function putCommentById(req, res) {

    const formFactory = new FormFactory();
    
    try {

        const {
            body: { context },
            params: { id }
        } = req;

        if (!id) return res.status(400).json({
            isSuccess: false,
            message: 'commentId 가 전달되지 않았습니다.',
            result: {}
        });

        if (!context) return res.stataus(400).json({
            isSuccess: false,
            message: "댓글 내용을 입력해주세요",
            result: {}
        });

        const result = await commentService.putCommentById(id, context);

        return res.status(201).json(
            formFactory.getSuccessForm('댓글 수정이 완료되었습니다.', { comment: result }));

    } catch(err) {

        res.locals.error = err;
        res.locals.formFactory = formFactory;

        return next();

    }

}
export async function deleteCommentById(req, res) {

    const formFactory = new FormFactory();
    
    try {

        const { id } = req.params;

        if (!id) return res.status(400).json({
            isSuccess: false,
            message: 'commentId 가 전달되지 않았습니다.',
            result: {}
        });

        const result = await commentService.deleteCommentById(id);

        return res.status(201).json(
            formFactory.getSuccessForm('댓글 삭제가 완료되었습니다.', { comment: result }));

    } catch(err) {

        res.locals.error = err;
        res.locals.formFactory = formFactory;

        return next();

    }

}