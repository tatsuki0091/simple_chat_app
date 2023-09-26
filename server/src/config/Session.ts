const session = require('express-session');
import MongoStore from 'connect-mongodb-session';
import dotenv from "dotenv";
import Redis from 'ioredis';
import { Types } from 'mongoose';
dotenv.config();

const MongoDBStore = MongoStore(session);
const DB = process.env.DB!;
const SESSION_SECRET = process.env.SESSION_SECRET!;

declare module 'express-session' {
    interface SessionData {
        created: Date;
        username: string;
        _id: Types.ObjectId;
    }
}

// MongoDBStoreのインスタンスを作成
const store = new MongoDBStore({
    uri: DB,
    collection: 'sessions',
});

export const sessionSetting = session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 1,
    },
})
