import { connectDB } from "./config/DatabaseConfig";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./api/routes/User";
const session = require('express-session');
import MongoStore from 'connect-mongodb-session';
import dotenv from "dotenv";
dotenv.config();
const fs = require("fs");
const https = require("https");

const MongoDBStore = MongoStore(session);
const app: Application = express();
const PORT = process.env.PORT;
const DB = process.env.DB!;
const SESSION_SECRET = process.env.SESSION_SECRET!;

import { Types } from 'mongoose';

declare module 'express-session' {
    interface SessionData {
        created: Date;
        username: string;
        _id: Types.ObjectId;
    }
}


const key = fs.readFileSync("localhost-key.pem", "utf-8");
const cert = fs.readFileSync("localhost.pem", "utf-8");

// declare module 'express-session' {
//     interface SessionData {
//         username?: string; // カスタムプロパティを追加
//     }
// }

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

console.log(DB)
// MongoDBStoreのインスタンスを作成
const store = new MongoDBStore({
    uri: DB,
    collection: 'sessions',
});

// セッションの設定
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        store: store,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        },
    }));

app.use(userRoute)

connectDB();
https.createServer({ key: key, cert: cert }, app).listen(PORT);

