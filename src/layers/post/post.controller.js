import * as postService from './post.service.js';

import { FormFactory, exceptionHandler } from '../../modules/_.lodaer.js';
import { BadRequestException } from '../../models/_.loader.js';


export async function getPostsByQuery(req, res, next) {

    const formFactory = new FormFactory();

    try {
        
        const { sort } = req.query;

        const result = await postService.getPostsByQuery(sort);

        return res.status(201).json(
            formFactory.getSuccessForm('게시글 불러오기에 성공하였습니다.', result));

    } catch(err) {

        res.locals.error = err;
        res.locals.formFactory = formFactory;

        return next();

    }
    
}

export async function createPost(req, res, next) {

    const formFactory = new FormFactory();

    try {

        const { title, context, owner, password } = req.body;

        if (title.length >=3 && title.length <= 30
            && context.length >= 3 && context.length <= 300
            && owner.length >= 1 && password.length >= 1) {
    
            const result = await postService.createPost(title, context, owner, password);
    
            return res.status(201).json(
                formFactory.getSuccessForm('게시글 작성이 완료되었습니다.', result));
    
        } else throw new BadRequestException('잘못된 요청이 전달되었습니다. 변수의 범위를 고려해서 보내주세요');

    } catch(err) {

        res.locals.error = err;
        res.locals.formFactory = formFactory;

        return next();

    }
    

}

export async function getPostById(req, res, next) {

    const formFactory = new FormFactory();

    try {

        const { id } = req.params;

        const result = await postService.getPostById(id);

        return res.status(201).json(
            formFactory.getSuccessForm('게시글 로딩이 완료되었습니다.', result));

    } catch(err) {

        res.locals.error = err;
        res.locals.formFactory = formFactory;

        return next();

    }

}

export async function putPostById(req, res, next) {

    const formFactory = new FormFactory();

    try {

        const {
            params: { id },
            body: { title, context, owner, password }
        } = req;
    
        if (title?.length >=3 && title?.length <= 30
            && context?.length >= 3 && context?.length <= 300) {
    
            const result = await postService.putPostById(id, title, context, owner, password);

            return res.status(201).json(
                formFactory.getSuccessForm('게시글 수정에 성공하셨습니다.', result));
    
        } else throw new BadRequestException('잘못된 요청이 전달되었습니다. 변수의 범위를 고려해서 보내주세요');

    } catch(err) {

        res.locals.error = err;
        res.locals.formFactory = formFactory;

        return next();

    }
    
}

export async function deletePostById(req, res, next) {

    const formFactory = new FormFactory();

    try {

        const {
            params: { id },
            body: { owner, password }
        } = req;
        
        if (owner.length >= 1 && password.length >= 1) {
    
            const result = await postService.deletePostById(id, owner, password);

            return res.status(201).json(
                formFactory.getSuccessForm('게시글이 삭제되었습니다.', result));
    
        } else throw new BadRequestException('잘못된 요청이 전달되었습니다. 변수의 범위를 고려해서 보내주세요');
        
    } catch(err) {

        res.locals.error = err;
        res.locals.formFactory = formFactory;

        return next();

    }

}