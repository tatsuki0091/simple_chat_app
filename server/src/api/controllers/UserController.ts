import { RequestHandler } from "express";
import {
  CreateUser as CreateUserInterface,
  ResetPassword as ResetPasswordInterface,
  Login as LoginInterface,
} from "../interfaces/user";
import {
  createUser as createUserService,
  resetPassword as resetPasswordService,
  login as loginUserService,
} from "../services/UserService";
import { encryptPasswordGenerator, assertPassword } from "../helpers/auth";
import { RESET_PASSWORD_LENGTH, BASE_CHAR } from "../constants/auth";
import { mailInstance } from "../helpers/mail";
import {
  RESET_PASSWORD_SUBJECT,
  SUCCEEDED_EMAIL,
  FAILED_EMAIL,
} from "../constants/mail";




export const login: RequestHandler = async (req, res) => {
  const loginInfo: LoginInterface = {
    email: req.body.email,
  };
  try {
    // Fetch the user data
    const loginResult = await loginUserService(loginInfo);
    if (loginResult !== null) {
      // Check the password is correct
      const assertPasswordResult: Boolean = await assertPassword(req.body.password, loginResult.password)
      console.log('------------------')

      if (assertPasswordResult) {
        console.log(assertPasswordResult)
        req.session.username = loginResult.username;
        req.session._id = loginResult._id;
        req.session.created = new Date;
        console.log(req.session)
        res.json(loginResult)
      }
    }
  } catch (e) {
    res.json({ pass: false, errors: e })
  }



};

export const createUser: RequestHandler = async (req, res) => {
  // Encrypt password
  const encryptPassword: string = await encryptPasswordGenerator(
    req.body.password
  );
  const creatInfo: CreateUserInterface = {
    username: req.body.username,
    email: req.body.email,
    password: encryptPassword,
    created: req.body.created,
  };
  const createResult = await createUserService(creatInfo);
  res.json(createResult);
};

export const resetPassword: RequestHandler = async (req, res) => {
  // Generate random password
  let password = "";
  for (let i = 0; i < RESET_PASSWORD_LENGTH; i++) {
    let selected = Math.floor(Math.random() * BASE_CHAR.length);
    password += BASE_CHAR.substring(selected, selected + 1);
  }
  // Encrypt password
  const encryptPassword: string = await encryptPasswordGenerator(password);
  try {
    // Update password
    const resetInfo: ResetPasswordInterface = {
      email: req.body.email,
      password: encryptPassword,
      updated: req.body.updated,
    };
    const updateResult = await resetPasswordService(resetInfo);

    if (!updateResult) {
      res.json({
        pass: false,
        message:
          "Please check your email address. There is no your email address.",
      });
    } else {
      // Send email
      mailInstance.sendMail({
        from: process.env.HOST_MAIL,
        to: req.body.email,
        subject: RESET_PASSWORD_SUBJECT,
        text: `Your new password is ${password}`,
      });
      res.json({ pass: true, data: SUCCEEDED_EMAIL });
    }
  } catch (error) {
    console.error(error);
    res.json({ pass: false, data: FAILED_EMAIL });
    throw new Error(`${error}`);
  }
};
