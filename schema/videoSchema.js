const mongoose = require('mongoose');
const {commentSchema} = require('./commentSchema');

const videoSchema = new mongoose.Schema({
    videoTitle: {type: String, required: true},
    likes: {type: Number, required: true},
    dislikes: {type: Number, required: true},
    comments: {type: [commentSchema]},
});


module.exports = mongoose.model('Video', videoSchema);