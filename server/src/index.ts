import { connectDB } from "./config/DatabaseConfig";
import { sessionSetting } from "./config/Session"
import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./api/routes/User";
import sessionRoute from "./api/routes/Session";
import dotenv from "dotenv";
const fs = require("fs");
const https = require("https");
import cookieParser from 'cookie-parser';


dotenv.config();

const app: Application = express();
const PORT = process.env.PORT;

// declare module 'express-session' {
//     interface SessionData {
//         created: Date;
//         username: string;
//         _id: Types.ObjectId;
//     }
// }

const key = fs.readFileSync("localhost-key.pem", "utf-8");
const cert = fs.readFileSync("localhost.pem", "utf-8");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

// セッションの設定
app.use(sessionSetting);
app.use(userRoute)
app.use(sessionRoute)


connectDB();
https.createServer({ key: key, cert: cert }, app).listen(PORT);

