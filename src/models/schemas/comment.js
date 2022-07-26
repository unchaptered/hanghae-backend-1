import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    postId: { type: mongoose.Types.ObjectId, ref: 'Post' },
    context: { type: String },
}, {
    timestamps: {
        createdAt: true
    }
})

export const commentModel = mongoose.model('Comment', commentSchema);