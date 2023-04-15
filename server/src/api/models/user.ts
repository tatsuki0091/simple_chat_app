import mongoose, { Schema, Document } from "mongoose";
import { User } from "../interfaces/models/user";

const userSchema: Schema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
  updated: {
    type: Date,
    required: false,
  },
});

export default mongoose.model<User>("User", userSchema);
