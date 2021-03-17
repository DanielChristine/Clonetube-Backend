const express = require('express');
const connectDB = require ('./config/db');


const app = express();
connectDB();

app.use(express.json());


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
