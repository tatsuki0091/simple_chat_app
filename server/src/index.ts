import express, { Application, Request, Response } from "express";
require("dotenv").config();
const fs = require("fs");
const https = require("https");

const app: Application = express();
const PORT = process.env.PORT;

const key = fs.readFileSync("localhost-key.pem", "utf-8");
const cert = fs.readFileSync("localhost.pem", "utf-8");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

https.createServer({ key, cert }, app).listen(PORT);
