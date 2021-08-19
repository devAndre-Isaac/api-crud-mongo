import "reflect-metadata";
import express from "express";
import "./database/connection";
import { userRouter } from "./routes/user";
import { companyRouter } from "./routes/company";

const app = express();
app.use(express.json());
app.use(userRouter, companyRouter);

app.listen(3333, () => {
  console.log("⚡Server started at http://localhost:3333");
});
