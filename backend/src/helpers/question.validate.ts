import QuestionModel from "../models/question.model";
import Joi from "joi";

const questionSchema = Joi.object({
    question: Joi.string().required(),
    description: Joi.string().required(),
    code: Joi.string().required(),
    is_deleted: Joi.string().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required(),
    user_id: Joi.string().required(),
    views: Joi.number().required(),
    id: Joi.string().required()
})


const validateQuestion = (question:QuestionModel) => {

    return questionSchema.validate(question)
}

export default validateQuestion