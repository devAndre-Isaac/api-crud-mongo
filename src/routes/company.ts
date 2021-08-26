import { Router } from "express";
import CompanyControlller from "../controllers/CompanyControlller";

const companyRouter = Router();

companyRouter.get("/read/company", CompanyControlller.read);

companyRouter.post("/create/company", CompanyControlller.store);

companyRouter.delete("/remove/user/:_id", CompanyControlller.remove);

export { companyRouter };
