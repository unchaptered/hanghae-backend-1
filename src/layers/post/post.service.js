import { postModel, NotFoundException, UnauthorizedException } from '../../models/_.loader.js';

/**
 * 
 * @param {*} sort 'asc' | 'desc'
 * @returns `Object` : { title, owner, createdAt }
 * @throws `NotFoundException`
 */
export async function getPostsByQuery(sort) {

    const result = await postModel.find({})
        .sort({ 'createdAt': sort === 'asc' ? 'asc' : 'desc' })
        .select('_id title owner createdAt');

    if (result === null)
        throw NotFoundException('게시글이 존재하지 않습니다.');

    return result;
};

/**
 * 
 * @param {*} title 
 * @param {*} context 
 * @param {*} owner 
 * @param {*} password 
 * @returns `Object` : { _id, title, context, owner, password }
 */
export async function createPost(title, context, owner, password) {

    const result = await new postModel({ title, context, owner, password }).save();

    return result;

};

/**
 * 
 * @param {*} id 
 * @returns `Object` : { title, context, owner }
 * @thorws `NotFoundException`
 */
export async function getPostById(id) {

    const result = await postModel.findById(id)
                                    .select('title context owner')
    if (result === null)
        throw new NotFoundException('게시글이 존재하지 않습니다.');

    return result;

};

/**
 * 
 * @param {*} id 
 * @param {*} title 
 * @param {*} context 
 * @param {*} owner 
 * @param {*} password 
 * @returns Object : { title, context, owner, password }
 * @throws `NotFoundException`
 * @throws `UnauthorizedException`
 */
export async function putPostById(id, title, context, owner, password) {

    const isExists = await postModel.exists({ _id: id });
    if (isExists === null)
        throw new NotFoundException('존재하지 않는 사용자 입니다.');

    const result = await postModel.findOneAndUpdate({ $and: [{ _id: id }, { owner }, { password }]}, { title, context })
                                    .select('title context owner password');
    if (result === null)
        throw new UnauthorizedException('소유주가 아닌 사용자입니다.');

    return result;

};

/**
 * 
 * @param {*} id 
 * @param {*} owner 
 * @param {*} password 
 * @returns Object : { title, context, owner, password }
 * @throws `NotFoundException`
 * @throws `UnauthorizedException`
 */
export async function deletePostById(id, owner, password) {

    const isExists = await postModel.exists({ _id: id });
    if (isExists === null)
        throw new NotFoundException('존재하지 않는 사용자 입니다.');

    const result = await postModel.findOneAndDelete({ $and: [{ _id: id }, { owner }, { password }]})
                                    .select('title context owner password');

    if (result === null)
        throw new UnauthorizedException('소유주가 아닌 사용자 입니다.');
    
    return result;

};