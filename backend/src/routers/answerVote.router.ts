import { Router } from "express";
import { createAnswerVote,  getAllAnswerVotes, getAnswerVoteById, updateAnswerVote } from "../controllers/answerVote.controller";


const answerVoteRouter = Router();


answerVoteRouter.post("/", createAnswerVote);
answerVoteRouter.get("/", getAllAnswerVotes);
answerVoteRouter.get("/:id", getAnswerVoteById);
answerVoteRouter.put("/:id", updateAnswerVote);


export default answerVoteRouter;
