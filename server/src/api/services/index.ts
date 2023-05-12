import { Model, Document, FilterQuery } from "mongoose";

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
export const create = async <T extends Document>(
  model: Model<T>,
  data: Object
) => {
  // const instance = new model(data);
  try {
    const createReponse = await model.create(data);
    return createReponse;
  } catch (error) {
    console.error(`Failed to save document: ${error}`);
    throw new Error(`Failed to save document: ${error}`);
  }
};

// Normal type
export const findOne = async <T extends Document>(
  model: Model<T>,
  query: object
) => {
  try {
    const findOneResponse = await model.findOne(query);
    return findOneResponse;
  } catch (error) {
    console.error(`Failed to fetch document: ${error}`);
    throw new Error(`Failed to fetch document: ${error}`);
  }
};

// Update one data
export const findOneAndUpdate = async <T extends Document>(
  model: Model<T>,
  filter: FilterQuery<T>,
  data: Object
) => {
  try {
    const updateReponse = await model.findOneAndUpdate(filter, data);
    return updateReponse;
  } catch (error) {
    console.error(`Failed to save document: ${error}`);
    throw new Error(`Failed to save document: ${error}`);
  }
};
