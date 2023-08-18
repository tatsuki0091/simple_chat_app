import mongoose from "mongoose";
export interface CreateUser {
  username: string;
  email: string;
  password: string;
  created: Date;
}

export interface ResetPassword {
  email: string;
  password: string;
  updated: Date;
}

export interface Login {
  email: string;
  password: string;
}

export interface ValueObject<T extends object> {
  [key: string]: T;
}

export interface UserCollection {
  username: string;

  email: string;

  password: string;

  created: Date;

  _id: mongoose.Types.ObjectId;

  __v: number;
}
