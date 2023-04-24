import { Model, Document } from "mongoose";

// Curry argument type
// export const save =
//   <T extends Document>(model: Model<T>) =>
//   async (data: T): Promise<T> => {
//     const instance = new model(data);
//     try {
//       await instance.save();
//       return instance;
//     } catch (error) {
//       console.error(`Failed to save document: ${error}`);
//       throw new Error(`Failed to save document: ${error}`);
//     }
//   };

// Normal type
export const save = async <T extends Document>(
  model: Model<T>,
  data: Object
) => {
  const instance = new model(data);
  try {
    await instance.save();
    return instance;
  } catch (error) {
    console.error(`Failed to save document: ${error}`);
    throw new Error(`Failed to save document: ${error}`);
  }
};

// Normal type
export const update = async <T extends Document>(
  model: Model<T>,
  data: Object
) => {
  const instance = new model(data);
  try {
    await instance.findOneAndUpdate();
    return instance;
  } catch (error) {
    console.error(`Failed to save document: ${error}`);
    throw new Error(`Failed to save document: ${error}`);
  }
};
