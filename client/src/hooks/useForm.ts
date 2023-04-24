import { useState } from "react";
import axios from "axios";

interface formProps<T> {
  values: T;
  url: string;
  // onSubmit: (values: T) => void;
}

export const useForm = async <T>({ values, url }: formProps<T>) => {
  const response = await axios
    .post("https://localhost:8080/user/create", values)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });

  return response;
};
