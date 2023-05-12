import { useState } from "react";
import { axiosMethods } from "../helpers/axios/axiosMap";
import { PATCH, POST } from "../helpers/constants";

interface formProps<T> {
  values: T;
  url: string;
  httpMethod: string;
  // onSubmit: (values: T) => void;
}

export const useForm = async <T extends object>({
  values,
  url,
  httpMethod,
}: formProps<T>) => {
  const response = await axiosMethods[httpMethod](url, values)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });

  return response;
};
