import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
    },
    selectedFiles: {
        type: String,
    },
    likesCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
},{Timestamp: true});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;