import { Router } from "express"
import { getMongoRepository } from 'typeorm';
import {User} from '../database/schemas/user';


const userRouter = Router()
userRouter.post('/api/user', async (req, res) => {
    const repository = getMongoRepository(User);

    const userToSave = repository.create(req.body);
    const user = await repository.save(userToSave);

    return res.status(201).json(user);
});

export {userRouter}