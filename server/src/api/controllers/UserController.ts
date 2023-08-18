import { RequestHandler } from "express";
import {
  CreateUser as CreateUserInterface,
  ResetPassword as ResetPasswordInterface,
  UserCollection,
} from "../interfaces/user";
import {
  createUser as createUserService,
  resetPassword as resetPasswordService,
  login as loginUserService,
} from "../services/UserService";
import { encryptPasswordGenerator, assertPassword } from "../helpers/auth";
import {
  RESET_PASSWORD_LENGTH,
  BASE_CHAR,
  INCORRECT_INFO,
} from "../constants/auth";
import { mailInstance } from "../helpers/mail";
import {
  RESET_PASSWORD_SUBJECT,
  SUCCEEDED_EMAIL,
  FAILED_EMAIL,
} from "../constants/mail";

export const login: RequestHandler = async (req, res) => {
  const loginResult = await loginUserService(req.body.email);
  if (loginResult === null) {
    res.json({ errorMessage: INCORRECT_INFO });
  } else {
    // Encrypt password
    const assertPasswordResponse: boolean = await assertPassword(
      req.body.password,
      loginResult.password
    );
    if (assertPasswordResponse) {
      req.session.user = loginResult._id.toString();
      // req.session.save((err) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     res.json(loginResult);
      //   }
      // });
    } else {
      res.json({ errorMessage: "Something wrong. Please try later." });
    }
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
  let createResult = await createUserService(creatInfo);
  if (createResult === null) {
    res.json({
      errorMesage:
        "Your username or email is already used. Please try another information",
    });
  } else {
    res.json(createResult);
  }
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
