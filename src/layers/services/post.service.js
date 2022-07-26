export async function getPostsByQuery(sort) {

    const result = await postModel.find({})
        .sort({ 'createdAt': sort === 'asc' ? 'asc' : 'desc' })
        .select('title owner createdAt');

    return result;
};

export async function createPost(title, context, owner, password) {

    const result = await new postModel({ title, context, owner, password }).save();

    return result;

};

export async function getPostById(id) {

    const result = await postModel.findById(id)
                                    .select('title context owner')

    return result;

};

export async function putPostById(id, title, context, owner, password) {

    const result = await postModel.findOneAndUpdate({ $and: [{ _id: id }, { owner }, { password }]}, { title, context }).select('title context owner password');
    
    return result;

};

export async function deletePostById(id, owner, password) {

    const result = await postModel.findOneAndDelete({ $and: [{ _id: id }, { owner }, { password }]});
    
    return result;

};