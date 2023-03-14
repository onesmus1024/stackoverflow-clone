import answerVoteModel from "../models/answerVote.model";
import Joi from "joi";



const answerVoteSchema = Joi.object({
    vote: Joi.number().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required(),
    user_id: Joi.string().required(),
    answer_id: Joi.string().required(),
    id: Joi.string().required()
})

const validateAnswerVote = (answerVote:answerVoteModel) => {
    return answerVoteSchema.validate(answerVote)
}


export default validateAnswerVote