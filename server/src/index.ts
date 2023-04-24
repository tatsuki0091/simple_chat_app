import { connectDB } from "./config/DatabaseConfig";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./api/routes/User";

require("dotenv").config();
const fs = require("fs");
const https = require("https");

const app: Application = express();
const PORT = process.env.PORT;

const key = fs.readFileSync("localhost-key.pem", "utf-8");
const cert = fs.readFileSync("localhost.pem", "utf-8");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.use("/user", userRoute);

connectDB();
https.createServer({ key, cert }, app).listen(PORT);
