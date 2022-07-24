import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    postId: { type: mongoose.Types.ObjectId, ref: 'Post' },
    context: { type: String },
}, {
    timestamps: {
        createdAt: true
    }
})

const commentModel = mongoose.model('Comment', commentSchema);

export default commentModel;