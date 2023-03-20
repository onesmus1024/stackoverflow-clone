import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { createAnswerVote,  getAllAnswerVotes, getAnswerVoteById, updateAnswerVote } from "../controllers/answerVote.controller";


const answerVoteRouter = Router();


answerVoteRouter.post("/",verifyToken, createAnswerVote);
answerVoteRouter.get("/",verifyToken,getAllAnswerVotes);
answerVoteRouter.get("/:id",verifyToken, getAnswerVoteById);
answerVoteRouter.put("/:id",verifyToken, updateAnswerVote);


export default answerVoteRouter;
