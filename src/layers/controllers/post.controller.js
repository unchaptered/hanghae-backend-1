import { errorHandler } from '../../modules/_.lodaer.js';
import * as postService from '../services/post.service.js';

export async function getPostsByQuery(req, res) {

    try {

        const { sort } = req.query;

        const result = await postService.getPostsByQuery(sort);

        return res.json({
            isSuccess: true,
            message: '게시글 불러오기에 성공하였습니다.',
            result: result.map(v => ({
                _id: v._id,
                title: v.title,
                owner: v.owner,
                createdAt: v.createdAt
            }))
        });

    } catch(err) {

        return errorHandler(res, err);

    }
    
}

export async function createPost(req, res) {

    try {

        const { title, context, owner, password } = req.body;

        if (title.length >=3 && title.length <= 30
            && context.length >= 3 && context.length <= 300
            && owner.length >= 1 && password.length >= 1) {
    
            const result = await postService.createPost(title, context, owner, password);
    
            return res.status(200).json({
                isSuccess: true,
                message: '게시글 작성이 완료되었습니다.',
                result
            });
    
        } else return res.status(400).json({
            isSuccess: false,
            message: '잘못된 요청이 전달되었습니다. 변수의 범위를 고려해서 보내주세요',
            result: {}
        });

    } catch(err) {

        return errorHandler(res, err);


    }
    

}

export async function getPostById(req, res) {

    try {

        const { id } = req.params;

        const result = await postService.getPostById(id);
        return res.status(201).json({
            isSuccess: false,
            message: '게시글 수정이 완료되었습니다.',
        })

    } catch(err) {

        return errorHandler(res, err);


    }

}

export async function putPostById(req, res) {

    try {

        const {
            params: { id },
            body: { title, context, owner, password }
        } = req;
    
        if (title?.length >=3 && title?.length <= 30
            && context?.length >= 3 && context?.length <= 300) {
    
            const result = await postService.putPostById(id, title, context, owner, passowrd);

            if (result === null)
                return res.status(404).json({
                    isSuccess: false,
                    message: '소유주가 아닌 사용자입니다.',
                    result: {}
                });
            else
                return res.status(201).json({
                    isSuccess: false,
                    message: '수정에 성공하셨습니다.',
                    result: {}
                });
    
        } else return res.status(400).json({
            isSuccess: false,
            message: '잘못된 요청이 전달되었습니다. 변수의 범위를 고려해서 보내주세요',
            result: {}
        });

    } catch(err) {

        return errorHandler(res, err);


    }
    
    
}

export async function deletePostById(req, res) {

    try {

        const {
            params: { id },
            body: { owner, password }
        } = req;
        
        if (owner.length >= 1 && password.length >= 1) {
    
            const result = await postService.deletePostById(id, owner, passowrd);
        
            return res.status(201).json({
                isSuccess: true,
                message: '게시글이 삭제되었습니다.',
                result: result
            });
    
        } else return res.status(400).json({
            isSuccess: false,
            message: '잘못된 요청이 전달되었습니다. 변수의 범위를 고려해서 보내주세요',
            result: {}
        });
        
    } catch(err) {

        return errorHandler(res, err);


    }

}