import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: { type: String },
    context: { type: String },
    
    owner: { type: String },
    passowrd: { type: String },
    comments: [
        { type: ObjectId, ref: 'Comment' }
    ]
}, {
    timestamps: {
        createdAt: true
    }
})

const postModel = model('Post', postSchema);

export default postModel;