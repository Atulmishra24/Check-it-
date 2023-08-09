import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import dotenv from 'dotenv'
import userRouter from "./routes/users.js";
import questionRouter from "./routes/question.js";
import answerRouter from "./routes/answer.js";

const app = express();
// dotenv.config()

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stackover flow clone Api");
});

app.use("/user", userRouter);
app.use("/question", questionRouter);
app.use("/answer", answerRouter)

const PORT = process.env.PORT || 5000;

const COONECTION_URL="mongodb+srv://admin:admin@stack-overflow-clone.zmzlhpf.mongodb.net/?retryWrites=true&w=majority";

// app.listen(PORT, () => {
// console.log(`server running on ${PORT}`);
// });

mongoose
  .connect(COONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));