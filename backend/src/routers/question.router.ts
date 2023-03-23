import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { createQuestion,deleteQuestion,getAllQuestions,getQuestionById,increaseQuestionViews,updateQuestion } from "../controllers/question.controller";
const questionRouter = Router();


questionRouter.post("/",verifyToken, createQuestion);
// include page and limit in query params   `?page=1&limit=10`

questionRouter.get("/",verifyToken, getAllQuestions);
questionRouter.get("/:id",verifyToken, getQuestionById);
questionRouter.put("/:id",verifyToken, updateQuestion);
questionRouter.delete("/:id",verifyToken, deleteQuestion);
questionRouter.put("/:question_id/views",verifyToken, increaseQuestionViews);


export default questionRouter;