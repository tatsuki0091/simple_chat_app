import { RequestHandler } from "express";
import bcrypt from "bcrypt";

export const getUser: RequestHandler = (req, res, next) => {
  console.log(req.body);
  console.log("getUser");
  res.json({ message: "hello" });
};
