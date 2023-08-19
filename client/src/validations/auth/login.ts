import { required, isEmail, passwordLength } from "./index";
import { REQUIRED, IS_EMAIL, PASSWORD_LENGTH_VALIDATION } from "../constants";
import { LoginInterface } from "../../interfaces/auth";

const loginValidateForm = (props: LoginInterface): Array<string> => {
  //
  const errors: Array<string> = [];
  // required
  if (required(props.email)) {
    errors.push("Email" + REQUIRED);
  }
  if (required(props.password)) {
    errors.push("Password" + REQUIRED);
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

export default loginValidateForm;
