import { Router } from "express";
import { createQuestion,deleteQuestion,getAllQuestios,getQuestionById,increaseQuestionViews,updateQuestion } from "../controllers/question.controller";

const questionRouter = Router();


questionRouter.post("/", createQuestion);
questionRouter.get("/", getAllQuestios);
questionRouter.get("/:id", getQuestionById);
questionRouter.put("/:id", updateQuestion);
questionRouter.delete("/:id", deleteQuestion);
questionRouter.put("/:id/views", increaseQuestionViews);


export default questionRouter;