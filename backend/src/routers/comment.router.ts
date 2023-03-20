import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { createComment, deleteComment, getAllComments,  updateComment,getCommentsById } from "../controllers/comment.controller";

const commentRouter = Router();


commentRouter.post("/",verifyToken, createComment);
commentRouter.get("/",verifyToken, getAllComments);
commentRouter.put("/:id",verifyToken, updateComment);
commentRouter.delete("/:id",verifyToken, deleteComment);
commentRouter.get("/:id",verifyToken, getCommentsById);

export default commentRouter;
