import AnswerModel from "../models/answer.model";
import Joi from "joi";


const answerSchema = Joi.object({
    answer: Joi.string().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required(),
    user_id: Joi.string().required(),
    question_id: Joi.string().required(),
    code: Joi.string().required(),
    id: Joi.string().required(),
    is_deleted: Joi.string().required(),
    is_accepted: Joi.string().required(),
    is_sent: Joi.string().required()
})

const validateAnswer = (answer:AnswerModel) => {
    return answerSchema.validate(answer)
}
export default validateAnswer