import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import todos from "./routers/todos.js";
import dotenv from "dotenv";

// firebase

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

dotenv.config({ path: "./.env" });

// Connect to MongoDB
const URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:admin@cluster0.vgzxqnx.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// router

app.use("/todos", todos);

// set port, listen for requests
const port = process.env.PORT || 5000;
