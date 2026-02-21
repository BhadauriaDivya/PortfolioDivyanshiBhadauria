const express = require("express");
const app = express();

const frontendURL = process.env.FRONTEND_URL;
const cors = require("cors");
app.use(
  cors({
    origin: frontendURL,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

require("dotenv").config();
const port = process.env.PORT;

const MONGO_URI = process.env.MONGO_URI;


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
