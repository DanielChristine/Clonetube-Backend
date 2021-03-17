const express = require("express");
const router = express.Router();
const Video = require("../schema/videoSchema");
const Joi = require("joi");
const Comment = require("../schema/commentSchema");

router.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    return res.send(videos);
  } catch (error) {
    return res.status(400).send(`Database Error ${error}`);
  }
});

router.post("/", async (req, res) => {
    const { error } = validateVideo(req.body);
    if (error) return res.status(400).send(error);

  let videos = new Video({
    videoTitle: req.body.videoTitle,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
  });

  try {
    const result = await videos.save();
    return res.send(result);
  } catch (error) {
    return res.status(400).send(`Database Error ${error}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const videos = await Video.findByIdAndRemove(req.params.id);

    if (!videos)
      return res
        .status(400)
        .send(`The video with id "${req.params.id} does not exist.`);

    return res.send(videos);
  } catch (ex) {
    return res.status(500).send(`Database Error: ${ex}`);
  }
});

function validateVideo(video) {
  const schema = Joi.object({
    videoTitle: Joi.string(),
    likes: Joi.number(),
    dislikes: Joi.number(),
  });
  return schema.validate(video);
}

module.exports = router;
