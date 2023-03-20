import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { createQuestion,deleteQuestion,getAllQuestions,getQuestionById,increaseQuestionViews,updateQuestion } from "../controllers/question.controller";
const questionRouter = Router();


questionRouter.post("/",verifyToken, createQuestion);
questionRouter.get("/",verifyToken, getAllQuestions);
questionRouter.get("/:id",verifyToken, getQuestionById);
questionRouter.put("/:id",verifyToken, updateQuestion);
questionRouter.delete("/:id",verifyToken, deleteQuestion);
questionRouter.put("/:id/views",verifyToken, increaseQuestionViews);


export default questionRouter;