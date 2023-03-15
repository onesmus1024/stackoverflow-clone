import { Router } from "express";
import { createQuestionVote,deleteQuestionVote,getAllQuestionVotes,getQuestionVoteById,updateQuestionVote } from "../controllers/questionVote.controller";


const questionVoteRouter = Router();

questionVoteRouter.post("/", createQuestionVote);
questionVoteRouter.get("/", getAllQuestionVotes);
questionVoteRouter.get("/:id", getQuestionVoteById);
questionVoteRouter.put("/:id", updateQuestionVote);
questionVoteRouter.delete("/:id", deleteQuestionVote);


export default questionVoteRouter;