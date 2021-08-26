import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authRouter = Router();

authRouter.post("/user/auth", AuthController.authUser);

authRouter.post("/company/auth", AuthController.authCompany);

export default authRouter;
