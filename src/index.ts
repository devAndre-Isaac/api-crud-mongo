import "reflect-metadata";
import express from "express";
import "./database/connection";
import {userRouter}  from "./routes/user";
import {companyRouter}  from "./routes/company";


const app = express();
app.use(express.json());

app.listen(3333, () => {
  console.log("Server is running in port 3333");
});

app.use(userRouter, companyRouter);
