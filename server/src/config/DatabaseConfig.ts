import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB = process.env.DB!;
// const DB_PORT = process.env.DB_PORT!;

export const connectDB = async () => {
  try {
    await mongoose.connect(DB!);
    console.log("MongoDb Connected");
  } catch (error) {
    console.log(error);
  }
};
