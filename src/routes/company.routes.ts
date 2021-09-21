import { Router } from "express";
import CompanyControlller from "../controllers/CompanyControlller";
import { createCompanyValidator } from "../validation/companyValidator";

const companyRouter = Router();

companyRouter.post(
  "/api/create/company",
  createCompanyValidator,
  CompanyControlller.store
);
companyRouter.put("/api/update/user/:_id", CompanyControlller.update);
companyRouter.delete("/api/remove/user/:_id", CompanyControlller.remove);

export { companyRouter };
