const mongoose = require('mongoose');
const {commentSchema} = require('./commentSchema');

const videoSchema = new mongoose.Schema({
    videoTitle: {type: String, required: true},
    likes: {type: Number},
    dislikes: {type: Number},
    comments: {type: [commentSchema]},
});


module.exports = mongoose.model('Video', videoSchema);