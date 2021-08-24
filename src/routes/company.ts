import { Router, Request, Response, response } from "express";
import { getMongoRepository } from "typeorm";
import CompanyControlller from "../controllers/CompanyControlller";
import Company from "../database/schemas/company";
import { getValidData } from "../validation/validatorHandle";

const companyRouter = Router();

companyRouter.get("/api/company", CompanyControlller.read);

companyRouter.post("/api/company", async (req: Request, res: Response) => {
  const repository = getMongoRepository(Company);
  const { cnpj } = req.body;
  const companyExists = await repository.findOne({ where: { cnpj } });
  if (companyExists) {
    return res.sendStatus(409);
  }
  const companyToCreate = repository.create(req.body);
  const company = await repository.save(companyToCreate);
  return res.status(201).json(company);
});

companyRouter.delete("/api/user/:_id", async (req: Request, res: Response) => {
  const repository = getMongoRepository(Company);
  const { params } = getValidData(req);
  const companyToRemove = repository.delete(params.id);
  const company = repository.deleteOne(companyToRemove);
  return res.status(204).json(company);
});

export { companyRouter };
