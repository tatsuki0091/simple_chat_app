import { required, isEmail, passwordLength } from "./index";
import { REQUIRED, IS_EMAIL, PASSWORD_LENGTH_VALIDATION } from "../constants";
import { CreateUserValidationInterface } from "../../interfaces/auth";

const createValidateForm = (
  props: CreateUserValidationInterface
): Array<string> => {
  //
  const errors: Array<string> = [];
  // required
  if (required(props.username)) {
    errors.push("Username" + REQUIRED);
  }
  if (required(props.password)) {
    errors.push("Password" + REQUIRED);
  }
  if (required(props.email)) {
    errors.push("Email" + REQUIRED);
  }

  // email format
  if (isEmail(props.email)) {
    errors.push("Email" + IS_EMAIL);
  }

  // password length
  if (passwordLength(props.email.length)) {
    errors.push("Password" + PASSWORD_LENGTH_VALIDATION);
  }

  return errors;
};

export default createValidateForm;
