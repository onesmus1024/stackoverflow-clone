import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { createQuestionVote,deleteQuestionVote,getAllQuestionVotes,getQuestionVoteById,updateQuestionVote } from "../controllers/questionVote.controller";


const questionVoteRouter = Router();

questionVoteRouter.post("/",verifyToken, createQuestionVote);
questionVoteRouter.get("/",verifyToken, getAllQuestionVotes);
questionVoteRouter.get("/:id",verifyToken, getQuestionVoteById);
questionVoteRouter.put("/:id",verifyToken, updateQuestionVote);
questionVoteRouter.delete("/:id",verifyToken, deleteQuestionVote);


export default questionVoteRouter;