const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Comment = require("../schema/commentSchema");


router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.send(comments);
  } catch (error) {
    return res.status(400).send(`Database Error ${error}`);
  }
});


router.post("/", async (req, res) => {
  let comments = new Comment({
    text: req.body.text,
  });

  try {
    const result = await comments.save();
    return res.send(result);
  } catch (error) {
    return res.status(400).send(`Database Error ${error}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const comments = await Comment.findByIdAndRemove(req.params.id);

    if (!comments)
      return res
        .status(400)
        .send(`The Comment with id "${req.params.id} does not exist.`);

    return res.send(comments);
  } catch (ex) {
    return res.status(500).send(`Database Error: ${ex}`);
  }
});

module.exports = router;
