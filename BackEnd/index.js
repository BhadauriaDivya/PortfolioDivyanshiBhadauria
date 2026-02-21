const express = require("express");
const app = express();

app.use(express.json());
const mongoose = require("mongoose");

require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const frontendURL = process.env.FRONTEND_URL;

const MONGO_URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: frontendURL,
  })
);
app.use('/uploads', express.static('uploads'));
app.use(require('./Routes/route'));
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });