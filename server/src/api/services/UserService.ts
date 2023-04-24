// import { User } from "../interfaces/models/user";
import User from "../models/User";
import {
  CreateUser as CreateUserInterface,
  ResetPassword as ResetPasswordInterface,
} from "../interfaces/user";
import { save, update } from "./index";

export const createUser = async (userInfo: CreateUserInterface) => {
  try {
    const createUserReponse = await save(User, userInfo);
    return createUserReponse;
  } catch (error) {
    console.error(`Failed to save document: ${error}`);
    throw new Error(`Failed to save document: ${error}`);
  }
};

export const resetPassword = async (userInfo: ResetPasswordInterface) => {
  try {
    const resetPasswordReponse = await update(User, userInfo);
    return resetPasswordReponse;
  } catch (error) {
    console.error(`Failed to save document: ${error}`);
    throw new Error(`Failed to save document: ${error}`);
  }
};
