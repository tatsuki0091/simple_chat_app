import bcrypt from "bcrypt";
export const encryptPasswordGenerator = async (
  nonHashedPassword: string
): Promise<string> => {
  try {
    const saltRounds = 10;
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
