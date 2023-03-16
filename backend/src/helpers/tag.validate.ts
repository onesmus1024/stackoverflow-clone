import TagModel from "../models/tag.model";
import Joi from "joi";

const tagSchema = Joi.object({
    tag: Joi.string().required(),
    description: Joi.string().required(),
    is_deleted: Joi.string().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required(),
    id: Joi.string().required()
})

const validateTag = (tag:TagModel) => {
    return tagSchema.validate(tag)
}

export default validateTag
