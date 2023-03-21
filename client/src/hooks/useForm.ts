import { useState } from "react";
import axios from "axios";

interface formProps<T> {
  values: T;
  url: string;
  onSubmit: (values: T) => void;
}

export const useForm = <T>({ values, url, onSubmit }: formProps<T>) => {
  const response = axios
    .post(url, values)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });

  return response;
};
