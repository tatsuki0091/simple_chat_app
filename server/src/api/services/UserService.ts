// import { User } from "../interfaces/models/user";
import User from "../models/user";
import {
  CreateUser as CreateUserInterface,
  ResetPassword as ResetPasswordInterface,
  Login as LoginInterface,
} from "../interfaces/user";
import { create, findOne, findOneAndUpdate } from "./index";

export const login = async (userInfo: LoginInterface) => {
  try {
    const loginUserReponse = await findOne(User, userInfo);
    return loginUserReponse;
  } catch (error) {
    console.error(`Failed to save document: ${error}`);
    throw new Error(`Failed to save document: ${error}`);
  }
};

export const createUser = async (userInfo: CreateUserInterface) => {
  try {
    const createUserReponse = await create(User, userInfo);
    return createUserReponse;
  } catch (error) {
    console.error(`Failed to save document: ${error}`);
    throw new Error(`Failed to save document: ${error}`);
  }
};

export const resetPassword = async (userInfo: ResetPasswordInterface) => {
  try {
    const findOneResponse = await findOneAndUpdate(
      User,
      { email: userInfo.email },
      { password: userInfo.password }
    );
    return findOneResponse;
  } catch (error) {
    console.error(`Failed to save document: ${error}`);
    throw new Error(`Failed to save document: ${error}`);
  }
};
