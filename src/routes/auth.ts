import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authRouter = Router();

authRouter.post("/api/user/auth", AuthController.authUser);

authRouter.post("/api/company/auth", AuthController.authCompany);

export { authRouter };
