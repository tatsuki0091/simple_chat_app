// import { User } from "../interfaces/models/user";
import User from "../models/user";
import {
  CreateUser as CreateUserInterface,
  ResetPassword as ResetPasswordInterface,
  UserCollection,
} from "../interfaces/user";
import { create, findOne, findOneAndUpdate } from "./index";

export const login = async (email: string) => {
  try {
    const findOneByEmail = await findOne(User, {
      email: email,
    });
    if (findOneByEmail === null) {
      return null;
    } else {
      return findOneByEmail;
    }
  } catch (error) {
    console.error(`Failed to save document: ${error}`);
    throw new Error(`Failed to save document: ${error}`);
  }
};

export const createUser = async (userInfo: CreateUserInterface) => {
  try {
    const findOneByEmail: object | null = await findOne(User, {
      email: userInfo.email,
    });
    const findOneByUsername: object | null = await findOne(User, {
      username: userInfo.username,
    });
    if (findOneByEmail !== null || findOneByUsername !== null) {
      return null;
    }
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
