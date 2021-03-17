const express = require("express");
const connectDB = require("./config/db");
const comments = require('./routes/commentLibrary')

const app = express();
connectDB();

app.use(express.json());
app.use("/api/comments", comments);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
