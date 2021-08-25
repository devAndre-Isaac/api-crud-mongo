import { Router } from "express";
import AuthController from "../controllers/AuthController";
const authRouter = Router();

authRouter.post("/auth", AuthController.auth);

export default authRouter;
