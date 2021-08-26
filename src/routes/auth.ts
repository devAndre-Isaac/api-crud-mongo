import { Router } from "express";
import AuthController from "../controllers/AuthController";
const authRouter = Router();

authRouter.post("/auth", AuthController.authUser);
authRouter.post("/auth", AuthController.authCompany);

export default authRouter;
