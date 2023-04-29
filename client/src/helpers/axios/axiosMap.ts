import axiosConfig from "./axiosConfig";
import { MethodMap } from "../../interfaces/axios";

export const axiosMethods: MethodMap = {
  get: axiosConfig.get,
  post: axiosConfig.post,
  put: axiosConfig.put,
  delete: axiosConfig.delete,
  patch: axiosConfig.patch,
};
