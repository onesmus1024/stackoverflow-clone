import TagModel from "../models/tag.model";
import { Request, Response,RequestHandler } from "express";
import {v4 as uuidv4} from "uuid";
import db from "../databasehelper/db-connection";
import path from "path";
import dotenv from "dotenv";
import validateTag from "../helpers/tag.validate";
dotenv.config({ path: path.join(__dirname, "../../.env") });


// id: string;
// tag: string;
// description: string;
// created_at: string;
// updated_at: string;
// is_deleted: string;

export const createTag:RequestHandler = async (req: Request, res: Response) => {
    try {
        const { tag, description } = req.body;
        const tagModel = new TagModel(
            uuidv4(),
            tag,
            description,
            new Date().toISOString(),
            new Date().toISOString(),
            "0"
        );
        const { error } = validateTag(tagModel);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error DB" });
        }
        const tagCreated = await db.exec("insertOrUpdateTag", {
            id: tagModel.id,
            tag: tagModel.tag,
            description: tagModel.description,
            is_deleted: tagModel.is_deleted,
            created_at: tagModel.created_at,
            updated_at: tagModel.updated_at,
        });
        if (tagCreated) {
            // return tag created
            return res.status(201).json(tagCreated);
        }
        return res.status(400).json({ message: "Tag not created" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


export const getAllTags:RequestHandler = async (req: Request, res: Response) => {
    try {
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error DB" });
        }
        const tags = await db.exec("getAllTags", {});
        if (tags) {
            return res.status(200).json(tags);
        }
        return res.status(400).json({ message: "Tags not found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// get tag by id

export const getTagById:RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }
        const tag = await db.exec("getTagById", { id });
        if (tag) {
            return res.status(200).json(tag);
        }
        return res.status(400).json({ message: "Tag not found" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

// update tag

export const updateTag:RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // get tag by id
        const tagToUpdate: TagModel[] = await db.exec("getTagById", { id }) as unknown as TagModel[];
        console.log(tagToUpdate[0].is_deleted);
        if (!tagToUpdate) {
            return res.status(400).json({ message: "Tag not found" });
        }
        
        const { tag, description } = req.body;
        const tagModel = new TagModel(
            id,
            tag,
            description,
            new Date(tagToUpdate[0].created_at).toISOString(),
            new Date().toISOString(),
            tagToUpdate[0].is_deleted.toString() === "true" ? "1" : "0"
        );
        console.log(tagModel);
        const { error } = validateTag(tagModel);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }


        const updatedTag = await db.exec("insertOrUpdateTag", {
            id: tagModel.id,
            tag: tagModel.tag,
            description: tagModel.description,
            is_deleted: tagModel.is_deleted,
            created_at: tagModel.created_at,
            updated_at: tagModel.updated_at,
        });

        if (updatedTag) {
            return res.status(200).json(updatedTag);
        }
        return res.status(400).json({ message: "Tag not updated" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


// delete tag

export const deleteTag:RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // get tag by id
        const tagToDelete: TagModel = await db.exec("getTagById", { id }) as unknown as TagModel;
        if (!tagToDelete) {
            return res.status(400).json({ message: "Tag not found" });
        }
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }
        // delete tag
        const deletedTag = await db.exec("deleteTag", { id });
        if (deletedTag) {
            return res.status(200).json({ message: "Tag deleted" });
        }
        return res.status(400).json({ message: "Tag not deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}


