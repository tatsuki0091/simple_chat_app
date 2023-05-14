import { required } from "./index";
import { REQUIRED } from "../constants";
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

  return errors;
};

export default loginValidateForm;
