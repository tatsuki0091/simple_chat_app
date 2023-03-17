import { useState, useCallback } from "react";

type UseInputReturnType = [
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
];

export const useInput = (initialValue: string): UseInputReturnType => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );

  const reset = () => {
    setValue(initialValue);
  };

  return [value, handleChange, reset];
};
