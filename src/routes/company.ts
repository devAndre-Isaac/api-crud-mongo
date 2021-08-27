import { Router } from "express";
import CompanyControlller from "../controllers/CompanyControlller";

const companyRouter = Router();

companyRouter.post("/create/company", CompanyControlller.store);

companyRouter.delete("/remove/user/:_id", CompanyControlller.remove);

export { companyRouter };
