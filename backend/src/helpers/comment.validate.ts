import CommentModel from "../models/comment.model";
import Joi from "joi";

const commentSchema = Joi.object({
    comment: Joi.string().min(3).max(30).required(),
    is_deleted: Joi.string().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required(),
    user_id: Joi.string().required(),
    answer_id: Joi.string().required(),
    id: Joi.string().required()
})


const validateComment = (comment:CommentModel) => {
    return commentSchema.validate(comment)
}

export default validateComment