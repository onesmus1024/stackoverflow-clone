import CommentModel from "../models/comment.model";
import { Request, Response, RequestHandler } from "express";
import db from "../databasehelper/db-connection";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import dotenv from "dotenv";
import validateComment from "../helpers/comment.validate";
dotenv.config({ path: path.join(__dirname, "../../.env") });


export const createComment: RequestHandler = async (req: Request, res: Response) => {
    try{

        const { comment, user_id, answer_id,is_deleted } = req.body;

        const commentModel = new CommentModel(
            uuidv4(),
            comment,
            new Date().toISOString(),
            new Date().toISOString(),
            user_id,
            answer_id,
            is_deleted
        );

        console.log(commentModel);
        

        const { error } = validateComment(commentModel);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // create comment 
        
        const commentCreated = await db.exec("insertOrUpdateComment", {
            id: commentModel.id,
            comment: commentModel.comment,
            created_at: commentModel.created_at,
            updated_at: commentModel.updated_at,
            user_id: commentModel.user_id,
            is_deleted: commentModel.is_deleted,
            answer_id: commentModel.answer_id
        });

        if (commentCreated) {
            return res.status(200).json(commentCreated);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }




    }
    catch(error: any){

        return res.status(500).json({ message:error.message });
    }
}



export const getCommentsById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // get comments by id
        const comments = await db.exec("getCommentById", { id: id });

        if (comments) {
            return res.status(200).json(comments);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}


export const getAllComments : RequestHandler = async (req: Request, res: Response) => {
    try {
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // get all comments
        const comments = await db.exec("getAllComments", {});

        if (comments) {
            return res.status(200).json(comments);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateComment: RequestHandler = async (req: Request, res: Response) => {
    try{

        const {id } = req.params;
        const { comment, user_id, answer_id,is_deleted } = req.body;
        // get comment by id
        const commentToBeUpdated:CommentModel[] = await db.exec("getCommentById", { id: id }) as unknown as CommentModel[];

        if (!commentToBeUpdated) {
            return res.status(404).json({ message: "Comment not found" });
        }

        const commentModel = new CommentModel(
            id,
            comment,
            new Date(commentToBeUpdated[0].created_at).toISOString(),
            new Date().toISOString(),
            user_id,
            answer_id,
            is_deleted
        );

        const { error } = validateComment(commentModel);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // update comment

        const commentUpdated = await db.exec("insertOrUpdateComment", {
            id: commentModel.id,
            comment: commentModel.comment,
            created_at: commentModel.created_at,
            updated_at: commentModel.updated_at,
            user_id: commentModel.user_id,
            answer_id: commentModel.answer_id,
            is_deleted: commentModel.is_deleted
        });

        if (commentUpdated) {

            return res.status(200).json(commentUpdated);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }



    }
    catch(error: any){
        return res.status(500).json({ message:error.message });
    }
}

export const deleteComment: RequestHandler = async (req: Request, res: Response) => {

    try{

        const { id } = req.params;
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // delete comment by id

        const deletedComment:CommentModel = await db.exec("deleteComment", { id: id }) as unknown as CommentModel;

        if (deletedComment) {
            return res.status(200).json(deletedComment);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }


    }
    catch(error: any){
        return res.status(500).json({ message:error.message });
    }
}



