import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.router.js";

// routes declaration
// middileware ki tarh use karte hai jo niche vale line me likha gya hai
app.use("/users", userRouter);

export {app};