import express from "express";
import { createUser, resetPassword } from "../controllers/UserController";
const router = express.Router();

router.post("/create", createUser);
router.patch("/reset-password", resetPassword);

export default router;
