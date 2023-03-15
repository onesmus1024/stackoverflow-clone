import { Router } from "express";
import { createComment, deleteComment, getAllComments,  updateComment } from "../controllers/comment.controller";

const commentRouter = Router();


commentRouter.post("/", createComment);
commentRouter.get("/", getAllComments);
commentRouter.put("/:id", updateComment);
commentRouter.delete("/:id", deleteComment);


export default commentRouter;
