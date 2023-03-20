import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { createCompany,getAllCompanies, getCompanyById, updateCompany } from "../controllers/company.controller";


const companyRouter = Router();


companyRouter.post("/",verifyToken, createCompany);
companyRouter.get("/",verifyToken, getAllCompanies);
companyRouter.get("/:id", verifyToken,getCompanyById);
companyRouter.put("/:id", verifyToken,updateCompany);



export default companyRouter;
