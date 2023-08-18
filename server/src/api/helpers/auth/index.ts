import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../../constants/auth";

export const encryptPasswordGenerator = async (
  nonHashedPassword: string
): Promise<string> => {
  try {
    const saltRounds = SALT_ROUNDS;
    const encryptPassword = await bcrypt
      .hash(nonHashedPassword, saltRounds)
      .then((hashedPassword) => {
        return hashedPassword; // notice that all of these methods are asynchronous!
      });
    return encryptPassword;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to save document: ${error}`);
  }
};

export const assertPassword = (
  nonHashedPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    const compareResult: Promise<boolean> = bcrypt.compare(
      nonHashedPassword,
      hashedPassword
    );
    return compareResult;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to save document: ${error}`);
  }
};
