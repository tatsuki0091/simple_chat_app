
import { RequestHandler } from "express";

export const get: RequestHandler = async (req, res) => {
    if ('cookie' in req.session) {
        res.json(true);
    } else {
        res.json(false);
    }
};