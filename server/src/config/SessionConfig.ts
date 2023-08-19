const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
// const MongoStore = require("connect-mongo");
const MongoDBStore = require("connect-mongodb-session")(session);
import dotenv from "dotenv";
dotenv.config();

const DB = process.env.DB!;
const sessionKey: string =
  process.env.SESSION_SECRET === undefined ? "" : process.env.SESSION_SECRET;

const store = new MongoDBStore({
  uri: DB, // MongoDBの接続URIを指定します
  collection: "sessions", // セッションデータを保存するコレクション名を指定します
});

export const sessionConfig = session({
  secret: sessionKey,
  resave: false,
  saveUninitialized: false,
  // store: store,
});
