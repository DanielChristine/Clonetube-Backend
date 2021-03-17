/*const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  //signature?
  text: { type: String, required: true, minlength: 2, maxlength: 300 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  replies: [{ type: replySchema }],
  videoId: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const replySchema = new mongoose.Schema({
  //signature?
  text: { type: String, required: true, minlength: 2, maxlength: 300 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);
const Reply = mongoose.model("Reply", replySchema);

module.exports = Comment;
module.exports = Reply;*/