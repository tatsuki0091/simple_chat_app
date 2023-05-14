import { PASSWORD_LENGTH } from "../constants";
export const required = <T>(inputInfo: T): boolean => {
  if (inputInfo === "") {
    return true;
  }
  return false;
};

export const isEmail = (inputInfo: string): boolean => {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const serchfind = expression.test(inputInfo);
  if (serchfind === false) {
    return true;
  }
  return false;
};

export const passwordLength = (passwordLength: number): boolean => {
  if (passwordLength < PASSWORD_LENGTH) {
    return true;
  }
  return false;
};
