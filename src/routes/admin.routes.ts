import { Router } from "express";
import AdminController from "../controllers/AdminController";

const adminRouter = Router();

adminRouter.get("/api/admin/read/user", AdminController.readUser);
adminRouter.get("/api/admin/read/user/:_id", AdminController.readUserById);

adminRouter.get("/api/admin/read/company", AdminController.readCompany);

export { adminRouter };
