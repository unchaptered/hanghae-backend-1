import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: { type: String, minLength: 3, maxLength: 30, required: true },
    context: { type: String, minLEngth: 3, maxLegnth: 300, required: true },
    
    owner: { type: String, required: true },
    password: { type: String, required: true },
    comments: [
        { type: mongoose.Types.ObjectId, ref: 'Comment' }
    ]
}, {
    timestamps: {
        createdAt: true
    }
})

export const postModel = mongoose.model('Post', postSchema);