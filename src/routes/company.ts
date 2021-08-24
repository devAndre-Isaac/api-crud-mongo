import { Router } from "express";
import CompanyControlller from "../controllers/CompanyControlller";

const companyRouter = Router();

companyRouter.get("/api/company", CompanyControlller.read);

companyRouter.post("/api/company", CompanyControlller.store);

companyRouter.delete("/api/user/:_id", CompanyControlller.remove);

export { companyRouter };
