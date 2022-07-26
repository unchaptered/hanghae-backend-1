import { postModel, commentModel } from '../../models/_.loader.js';


export async function getComment(postId, sort) {

    const result = await commentModel.find({ postId })
        .sort({ 'createdAt': sort === 'asc' ? 'asc' : 'desc' });

    return result;

};

export async function createComment(postId, context) {

    const comment = new commentModel({ postId, context });
  
    const post = await postModel.findByIdAndUpdate(postId, {
        $addToSet: { comments: comment._id }
    }, { new: true });

    await comment.save();

    return [ post, comment ];

};

export async function putCommentById(commentId, context) {

    const result = await commentModel.findByIdAndUpdate(id, { context }, { new: true});

    return result;

};

export async function deleteCommentById(commentId) {

    const result = await commentModel.findByIdAndDelete(commentId, { new: true });

    return result;

};
