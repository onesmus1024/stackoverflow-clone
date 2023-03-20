import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { createTag, getTagById, updateTag, deleteTag,getAllTags } from "../controllers/tag.controller";

const tagRouter = Router();

tagRouter.post("/", verifyToken, createTag);
tagRouter.get("/",verifyToken, getAllTags);
tagRouter.get("/:id",verifyToken, getTagById);
tagRouter.put("/:id", verifyToken, updateTag);
tagRouter.delete("/:id", verifyToken, deleteTag);



export default tagRouter;