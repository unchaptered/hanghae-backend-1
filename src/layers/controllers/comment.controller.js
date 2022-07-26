import { errorHandler } from '../../modules/_.lodaer.js';
import * as commentService from '../services/comment.service.js';

export async function getComment(req, res) {

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
        if (result === null)
            return res.status(404).json({
                isSuccess: false,
                message: '존재하는 댓글이 없습니다.',
                result: {}
            });

        return res.status(201).json({
            isSuccess: false,
            message: '댓글 조회가 완료되었습니다.',
            result: result
        });

    } catch(err) {

        return errorHandler(res, err);

    }

}

export async function createComment(req, res) {
    
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

        return res.json({
            isSuccess: true,
            message: '댓글 작성에 성공하셨습니다.',
            result: {
                comment: comment,
                post: post
            }
        });
            

    } catch(err) {

        return errorHandler(res, err);

    }

}

export async function putCommentById(req, res) {
    
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

        return res.status(201).json({
            isSuccess: true,
            message: '댓글 수정이 완료되었습니다.',
            result: {}
        });
            

    } catch(err) {

        return errorHandler(res, err);

    }

}
export async function deleteCommentById(req, res) {
    
    try {

        const { id } = req.params;

        if (!id) return res.status(400).json({
            isSuccess: false,
            message: 'commentId 가 전달되지 않았습니다.',
            result: {}
        });

        const result = await commentService.deleteCommentById(id);
        if (result === null)
            return res.status(404).json({
                isSuccess: false,
                message: '존재하지 않는 댓글입니다.',
                result: {}
            });
        
        return res.stataus(201).json({
            isSuccess: true,
            message: '댓글 삭제가 완료되었습니다.',
            result: {}
        });
        

    } catch(err) {

        return errorHandler(res, err);

    }

}