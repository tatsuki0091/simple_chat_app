import express from "express";
import {
  createUser,
  resetPassword,
  login,
} from "../controllers/UserController";
const router = express.Router();

router.post("/login", login);
router.post("/create", createUser);
router.patch("/reset-password", resetPassword);

export default router;
