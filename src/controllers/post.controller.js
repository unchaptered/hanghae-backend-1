import { postModel } from '../schemas/_.loader.js';

export function getPostsByQuery(req, res) {
}

export async function createPost(req, res) {
    const { title, context, owner, password } = req.body;

    if (title.length >=3 && title.length <= 30
        && context.length >= 3 && context.length <= 300
        && owner.length >= 1 && password.length >= 1) {

        const result = await new postModel({ title, context, owner, password}).save();
        console.log(result);

        return res.status(200).json({
            message: 'success',
            result
        });

    } else return res.status(400).json('hello');
}

export function getPostById(req, res) {
}
export function putPostById(req, res) {
}
export function deletePostById(req, res) {
}