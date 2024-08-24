import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./routes/userRouter.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/user", userRouter);

mongoose
  .connect("mongodb://localhost:27017/mymess")
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server and DataBase running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log("Error connecting to MongoDB:", error.message));
