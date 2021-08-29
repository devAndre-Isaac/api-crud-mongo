import { Router } from "express";
import CompanyControlller from "../controllers/CompanyControlller";

const companyRouter = Router();

companyRouter.post("/api/create/company", CompanyControlller.store);

companyRouter.delete("/api/remove/user/:_id", CompanyControlller.remove);

export { companyRouter };
