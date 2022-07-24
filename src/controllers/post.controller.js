import { postModel } from '../schemas/_.loader.js';

export async function getPostsByQuery(req, res) {

    const { sort } = req.query;

    const result = await postModel.find({})
                                .sort({ 'createdAt': sort === 'asc' ? 'asc' : 'desc' })
                                .select('title owner createdAt');
    if (result === null)
        return res.status(201).json({
            isSuccess: false,
            message: '게시글이 존재하지 않습니다.',
            result: {}
        });
    else
        return res.json({
            isSuccess: true,
            message: '게시글 불러오기에 성공하였습니다.',
            result: result.map(v => ({
                title: v.title,
                owner: v.owner,
                createdAt: v.createdAt
            }))
        });
    
}

export async function createPost(req, res) {

    const { title, context, owner, password } = req.body;

    if (title.length >=3 && title.length <= 30
        && context.length >= 3 && context.length <= 300
        && owner.length >= 1 && password.length >= 1) {

        const result = await new postModel({ title, context, owner, password }).save();
        console.log(result);

        return res.status(200).json({
            message: 'success',
            result
        });

    } else return res.status(400).json('hello');

}

export async function getPostById(req, res) {

    const { id } = req.params;

    return res.status(200).json(await postModel.findById(id).select('title context owner'));

}

export async function putPostById(req, res) {

    const {
        params: { id },
        body: { title, context, owner, password }
    } = req;

    if (title?.length >=3 && title?.length <= 30
        && context?.length >= 3 && context?.length <= 300) {

        const isExists = await postModel.exists({ _id: id });
        if (isExists === null) return res.status(404).json('존재하지 않는 사용자입니다.');

        const result = await postModel.findOneAndUpdate({ $and: [{ _id: id }, { owner }, { password }]}, { title, context }).select('title context owner password');
        if (result === null) return res.status(403).json('소유주가 아닌 사용자입니다.');

        return res.status(201).json('수정에 성공하셨습니다.');

    } else return res.status(400).json('파라미터 누락');
    
}

export async function deletePostById(req, res) {

    const {
        params: { id },
        body: { owner, password }
    } = req;
    
    if (owner.length >= 1 && password.length >= 1) {

        const isExists = await postModel.exists({ _id: id });
        if (isExists === null) return res.status(404).json('존재하지 않는 사용자입니다.');
    
        const result = await postModel.findOneAndDelete({ $and: [{ _id: id }, { owner }, { password }]});
        if (result === null) return res.status(403).json('소유주가 아닌 사용자입니다.');
    
        return res.status(201).json('삭제에 성공하였습니다.');

    } else return res.status(200).json('파라미터 누락');

}