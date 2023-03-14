import CompanyModel from "../models/company.model";
import Joi from "joi";

const companySchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    logo_url: Joi.string().min(3).max(30).required(),
    tag_id: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30).required(),
    is_deleted: Joi.string().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required(),
    id: Joi.string().required()
})

const validateCompany = (company:CompanyModel) => {
    return companySchema.validate(company)
}


export default validateCompany
