import { Schema, model, ObjectId } from 'mongoose';

const commentSchema = new Schema({
    post: { type: ObjectId, ref: 'Post' },
    context: { type: String },
}, {
    timestamps: {
        createdAt: true
    }
})

const commentModel = model('Comment', commentSchema);

export default commentModel;