const express = require('express');
const router = express.Router();
const Video = require("../schema/videoSchema");
const Joi = require('joi');

router.get("/", async (req, res) => {
    try {
        const videos = await Video.find();
        return res.send(videos);
    } catch(error) {
        return res.status(400).send(`Database error ${error}`);
    }
});

module.exports = router;