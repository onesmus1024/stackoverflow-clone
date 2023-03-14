import QuestionVoteModel from "../models/questionVote.model";
import Joi from "joi";

const questionVoteSchema = Joi.object({
    vote: Joi.number().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required(),
    user_id: Joi.string().required(),
    question_id: Joi.string().required(),
    id: Joi.string().required()
})

const validateQuestionVote = (questionVote:QuestionVoteModel) => {
    return questionVoteSchema.validate(questionVote)
}

export default validateQuestionVote
