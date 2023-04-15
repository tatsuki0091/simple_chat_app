import express from "express";
import { getUser } from "../controllers/UserController";
const router = express.Router();

router.post("/create", getUser);
router.post("/login", getUser);

export default router;
