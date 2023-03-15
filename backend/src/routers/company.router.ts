import { Router } from "express";
import { createCompany,getAllCompanies, getCompanyById, updateCompany } from "../controllers/company.controller";


const companyRouter = Router();


companyRouter.post("/", createCompany);
companyRouter.get("/", getAllCompanies);
companyRouter.get("/:id", getCompanyById);
companyRouter.put("/:id", updateCompany);



export default companyRouter;
