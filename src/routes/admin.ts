import { Router } from "express";
import AdminController from "../controllers/AdminController";

const adminRouter = Router();

adminRouter.get("/admin/read/user", AdminController.readUser);

export { adminRouter };
