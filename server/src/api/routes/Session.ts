import express from "express";
import {
    get,
} from "../controllers/SessionController";
const router = express.Router();

router.get("/session", get);
export default router;
