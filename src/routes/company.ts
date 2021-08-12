import { Router, Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import Company from "../database/schemas/company";
import { getValidData } from "../validation/validatorHandle";

const companyRouter = Router();

companyRouter.get("/api/user", async (req: Request, res: Response) => {
    const repository = getMongoRepository(Company);
    const companyToRead = await repository.find();
    return res.json(companyToRead);  
});
  