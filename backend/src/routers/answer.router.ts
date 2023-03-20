import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { createAnswer, deleteAnswer, getAllAnswers, getAnswerById, updateAnswer } from "../controllers/answer.controller";

const answerRouter = Router();


answerRouter.post("/",verifyToken, createAnswer);
answerRouter.get("/",verifyToken, getAllAnswers);
answerRouter.get("/:id",verifyToken, getAnswerById);
answerRouter.put("/:id",verifyToken, updateAnswer);
answerRouter.delete("/:id",verifyToken, deleteAnswer);


export default answerRouter;
