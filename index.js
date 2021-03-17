const express = require("express");
const connectDB = require("./config/db");
const videos = require('./routes/videoLibrary')

const app = express();
connectDB();

app.use(express.json());
app.use("/api/videos", videos);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
