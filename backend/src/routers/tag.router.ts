import { Router } from "express";
import { createTag, getTagById, updateTag, deleteTag,getAllTags } from "../controllers/tag.controller";

const tagRouter = Router();

tagRouter.post("/", createTag);
tagRouter.get("/", getAllTags);
tagRouter.get("/:id", getTagById);
tagRouter.put("/:id", updateTag);
tagRouter.delete("/:id", deleteTag);



export default tagRouter;