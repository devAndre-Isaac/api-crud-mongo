import { Router, Request, Response, response } from "express";
import { getMongoRepository } from "typeorm";
import Company from "../database/schemas/company";
import { getValidData } from "../validation/validatorHandle";

const companyRouter = Router();

companyRouter.get("/api/company", async (req: Request, res: Response) => {
  const { header } = req.headers;
  if (header === undefined) {
    return response.sendStatus(400);
  }
  const repository = getMongoRepository(Company);
  const companyToRead = await repository.findAndCount();
  return res.json(companyToRead);
});

companyRouter.post("/api/company", async (req: Request, res: Response) => {
  const repository = getMongoRepository(Company);
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
