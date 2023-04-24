import { RequestHandler } from "express";
import {
  CreateUser as CreateUserInterface,
  ResetPassword as ResetPasswordInterface,
} from "../interfaces/user";
import {
  createUser as createUserService,
  resetPassword as resetPasswordService,
} from "../services/UserService";
import { encryptPasswordGenerator } from "../helpers/auth";

export const createUser: RequestHandler = async (req, res) => {
  // Encrypt password
  const encryptPassword: string = await encryptPasswordGenerator(
    req.body.password
  );
  const creatInfo: CreateUserInterface = {
    username: req.body.username,
    email: req.body.email,
    password: encryptPassword,
    created: req.body.created,
  };
  const createResult = await createUserService(creatInfo);
  res.json(createResult);
};

export const resetPassword: RequestHandler = async (req, res) => {
  // Encrypt password
  const encryptPassword: string = await encryptPasswordGenerator(
    req.body.password
  );
  const resetInfo: ResetPasswordInterface = {
    email: req.body.email,
    password: encryptPassword,
    updated: req.body.updated,
  };
  const updateResult = resetPasswordService(resetInfo);
  res.json(updateResult);
};
