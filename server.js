require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// routes
app.get((req, res) => {
  res.json({ massage: "welcome to the envelop" });
});
// port
const port = process.env.PORT || 4000;

// connect to mongodb server
mongoose
  .connect(process.env.mongo_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    // listen
    app.listen(port, () => {
      console.log(`Server listening on Port: ${port}`);
    });
  })
  .catch((err) => console.log(err.massage));
