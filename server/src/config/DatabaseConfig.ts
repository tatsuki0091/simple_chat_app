import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB = process.env.DB!;

export const connectDB = async () => {
  try {
    await mongoose.connect(DB!);
    console.log("MongoDb Connected");
  } catch (error) {
    console.log(error);
  }
};
