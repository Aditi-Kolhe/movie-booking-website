import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user_routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie_routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from "cors";


dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);


mongoose
  .connect(
    `mongodb+srv://kolheaditi5:${process.env.MONGODB_PASSWORD}@cluster0.ulsbnto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));
