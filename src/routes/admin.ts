import { Router } from "express";
import AdminController from "../controllers/AdminController";

const adminRouter = Router();

adminRouter.get("/admin/read/user", AdminController.readUser);

adminRouter.get("/admin/read/company", AdminController.readCompany);

export { adminRouter };
