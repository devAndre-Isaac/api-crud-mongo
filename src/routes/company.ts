import { Router, Request, Response, response } from "express";
import { getMongoRepository } from "typeorm";
import CompanyControlller from "../controllers/CompanyControlller";
import Company from "../database/schemas/company";
import { getValidData } from "../validation/validatorHandle";

const companyRouter = Router();

companyRouter.get("/api/company", CompanyControlller.read);

companyRouter.post("/api/company", CompanyControlller.store);


export { companyRouter };
