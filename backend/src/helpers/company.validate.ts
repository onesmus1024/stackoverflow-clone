import CompanyModel from "../models/company.model";
import Joi from "joi";

const companySchema = Joi.object({
    name: Joi.string().required(),
    logo_url: Joi.string().required(),
    tag_id: Joi.string().required(),
    description: Joi.string().required(),
    is_deleted: Joi.string().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required(),
    id: Joi.string().required()
})

const validateCompany = (company:CompanyModel) => {
    return companySchema.validate(company)
}


export default validateCompany
