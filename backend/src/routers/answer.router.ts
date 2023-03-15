import { Router } from "express";
import { createAnswer, deleteAnswer, getAllAnswers, getAnswerById, updateAnswer } from "../controllers/answer.controller";

const answerRouter = Router();


answerRouter.post("/", createAnswer);
answerRouter.get("/", getAllAnswers);
answerRouter.get("/:id", getAnswerById);
answerRouter.put("/:id", updateAnswer);
answerRouter.delete("/:id", deleteAnswer);


export default answerRouter;
