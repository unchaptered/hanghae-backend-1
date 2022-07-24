import commentModel from '../schemas/comment.js';
import postModel from '../schemas/post.js';

export async function getComment(req, res) {

}
export async function createComment(req, res) {

    const { postId, context } =req.body;

    if (!postId) return res.status(400).json({
        isSuccess: false,
        message: 'postId 가 전달되지 않았습니다.',
        result: {}
    })

    if (!context) return res.stataus(400).json({
        isSuccess: false,
        message: "댓글 내용을 입력해주세요",
        result: {}
    });

    const comment = new commentModel({ postId, context });

    const post = await postModel.findByIdAndUpdate(postId, {
        $addToSet: { comments: comment._id }
    }, { new: true });

    await comment.save();

    return res.json({
        isSuccess: true,
        message: '댓글 작성에 성공하셨습니다.',
        result: {
            comment: comment,
            post: post
        }
    });
}

export async function putCommentById(req, res) {

    const {
        body: { context },
        params: { id }
    } = req;

    if (!id) return res.status(400).json({
        isSuccess: false,
        message: 'postId 가 전달되지 않았습니다.',
        result: {}
    })

    if (!context) return res.stataus(400).json({
        isSuccess: false,
        message: "댓글 내용을 입력해주세요",
        result: {}
    });

    const result = await commentModel.findByIdAndUpdate(id, { context }, { new: true});

    return res.status(201).json({
        isSuccess: true,
        message: '댓글 수정이 완료되었습니다.',
        result: {}
    })

}
export function deleteCommentById(req, res) {
}