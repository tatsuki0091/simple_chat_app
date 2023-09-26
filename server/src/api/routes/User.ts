import express from "express";
import {
  createUser,
  resetPassword,
  login,
} from "../controllers/UserController";
const router = express.Router();

router.post("/user/login", login);
router.post("/user/create", createUser);
router.patch("/user/reset-password", resetPassword);

export default router;
