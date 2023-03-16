import Company from "../models/company.model";
import { Request, Response, RequestHandler } from "express";
import db from "../databasehelper/db-connection";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import dotenv from "dotenv";
import validateCompany from "../helpers/company.validate";
dotenv.config({ path: path.join(__dirname, "../../.env") });



// id: string;
// name: string;
// logo_url: string;
// tag_id: string;
// description: string;
// created_at: string;
// updated_at: string;
// is_deleted: string;


export const createCompany: RequestHandler = async (req: Request, res: Response) => {
    
   try {

    const { name, logo_url, tag_id, description,is_deleted } = req.body;
    const companyModel = new Company(
        uuidv4(),
        name,
        logo_url,
        tag_id,
        description,
        new Date().toISOString(),
        new Date().toISOString(),
        is_deleted
    );
        
    const { error } = validateCompany(companyModel);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // check for connection to db
    if (!db.checkConnection()) {
        return res.status(500).json({ message: "Internal server error" });
    }

    // create company

    const companyCreated:Company = await db.exec("insertOrUpdateCompany", {
        id: companyModel.id,
        name: companyModel.name,
        logo_url: companyModel.logo_url,
        tag_id: companyModel.tag_id,
        description: companyModel.description,
        created_at: companyModel.created_at,
        updated_at: companyModel.updated_at,
        is_deleted: companyModel.is_deleted
    }) as unknown as Company;



    if (companyCreated) {
        return res.status(201).json(companyCreated);
    } else {
        return res.status(500).json({ message: "company not created" });
    }

   } catch (error: any) {
    console.log(error);
    
       return res.status(500).json({ message: error.message });
   }

}


export const getAllCompanies: RequestHandler = async (req: Request, res: Response) => {
    try {
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // get all companies
        const companies = await db.exec("getAllCompanies", {});

        if (companies) {
            return res.status(200).json(companies);
        } else {
            return res.status(500).json({ message: "Internal server error" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getCompanyById: RequestHandler = async (req: Request, res: Response) => {
    try {
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // get company by id
        const company = await db.exec("getCompanyById", { id: req.params.id });

        if (company) {
            return res.status(200).json(company);
        } else {
            return res.status(500).json({ message: "Internal server error" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}


export const updateCompany: RequestHandler = async (req: Request, res: Response) => {

   
    try {

        const { name, logo_url, tag_id, description,is_deleted } = req.body;
        const id = req.params.id;
    
        // get company by id
    
        const company:Company[] = await db.exec("getCompanyById", { id: id }) as unknown as Company[];
    
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }
    
        const companyModel = new Company(
            id,
            name,
            logo_url,
            tag_id,
            description,
            new Date(company[0].created_at).toISOString(),
            new Date().toISOString(),
            is_deleted
        );
    
    
        const { error } = validateCompany(companyModel);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
    
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }
    
        // update company
    
        const companyUpdated = await db.exec("insertOrUpdateCompany", {
            id: companyModel.id,
            name: companyModel.name,
            logo_url: companyModel.logo_url,
            tag_id: companyModel.tag_id,
            description: companyModel.description,
            created_at: companyModel.created_at,
            updated_at: companyModel.updated_at,
            is_deleted: companyModel.is_deleted
        });
    
        if (companyUpdated) {
            return res.status(200).json(companyUpdated);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }
        
    } catch (error : any) {
        return res.status(500).json({ message: "Internal server error" });
        
    }

}

