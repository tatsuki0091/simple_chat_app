import { required, isEmail } from "./index";
import { REQUIRED, IS_EMAIL } from "../constants";
import { ResetPasswordValidationInterface } from "../../interfaces/auth";

const resetPasswordValidateForm = (
  props: ResetPasswordValidationInterface
): Array<string> => {
  //
  const errors: Array<string> = [];
  // required
  if (required(props.email)) {
    errors.push("Email" + REQUIRED);
  }

  // email format
  if (isEmail(props.email)) {
    errors.push("Email" + IS_EMAIL);
  }

  return errors;
};

export default resetPasswordValidateForm;
