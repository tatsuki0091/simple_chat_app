import { useState, Dispatch } from "react";

type UseValidateReturnType<T> = [
  string[],
  Dispatch<React.SetStateAction<string[]>>
];

export const useValidation = <T extends object>(
  values: Array<string>
): UseValidateReturnType<T> => {
  const [errors, setErrors] = useState<string[]>(values);
  return [errors, setErrors];
};
