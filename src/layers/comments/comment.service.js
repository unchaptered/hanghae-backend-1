import { postModel, commentModel, NotFoundException } from '../models/_.loader.js';

/**
 * 
 * @param {*} postId 
 * @param {*} sort 
 * @returns Comment : { _id, postId, context }
 * @throws `NotFoundException`
 */
export async function getComment(postId, sort) {

    const result = await commentModel.find({ postId })
        .sort({ 'createdAt': sort === 'asc' ? 'asc' : 'desc' })
        .select('_id postId context');

    if (result === null)
        throw NotFoundException('존재하는 댓글이 없습니다.');

    return result;

};

/**
 * 
 * @param {*} postId 
 * @param {*} context 
 * @returns Array [ Post, Comment ]
 */
export async function createComment(postId, context) {

    const comment = new commentModel({ postId, context });
  
    const post = await postModel.findByIdAndUpdate(postId, {
        $addToSet: { comments: comment._id }
    }, { new: true });

    await comment.save();

    return [ post, comment ];

};

/**
 * 
 * @param {*} commentId 
 * @param {*} context 
 * @returns Comment : { _id, postId, context }
 * @throws `NotFoundException`
 */
export async function putCommentById(commentId, context) {

    const result = await commentModel.findByIdAndUpdate(id, { context }, { new: true });
    if (result === null)
        throw new NotFoundException('존재하지 않는 댓글입니다.');

    return result;

};

/**
 * 
 * @param {*} commentId 
 * @returns Comment : { _id, postId, context }
 * @throws `NotFoundException`
 */
export async function deleteCommentById(commentId) {

    const result = await commentModel.findByIdAndDelete(commentId, { new: true });
    if (result === null)
        throw new NotFoundException('존재하지 않는 댓글입니다.');

    return result;

};
