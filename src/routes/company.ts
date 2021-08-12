import { Router, Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import Company from "../database/schemas/company";
import { getValidData } from "../validation/validatorHandle";

const companyRouter = Router();

companyRouter.get("/api/company", async (req: Request, res: Response) => {
  const repository = getMongoRepository(Company);
  const companyToRead = await repository.find();
  return res.json(companyToRead);
});

companyRouter.post("/api/company", async (req: Request, res: Response) => {
  const repository = getMongoRepository(Company);
  const companyToCreate =  repository.create(req.body);
  const company = await repository.save(companyToCreate);
  return res.status(201).json(company);
});



export {companyRouter}