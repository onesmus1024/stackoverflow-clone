import AnswerVoteModel from "../models/answerVote.model";
import { Request, Response, RequestHandler } from "express";
import db from "../databasehelper/db-connection";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import dotenv from "dotenv";
import validateAnswerVote from "../helpers/answerVote.validate";
dotenv.config({ path: path.join(__dirname, "../../.env") });



export const createAnswerVote: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { user_id, answer_id, vote } = req.body;
        const answerVoteModel = new AnswerVoteModel(
            uuidv4(),
            new Date().toISOString(),
            new Date().toISOString(),
            user_id,
            answer_id,
            vote,
        );

        const { error } = validateAnswerVote(answerVoteModel);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error DB" });
        }

        // create answer vote

        const answerVoteCreated = await db.exec("insertOrUpdateAnswerVote", {
            id: answerVoteModel.id,
            user_id: answerVoteModel.user_id,
            answer_id: answerVoteModel.answer_id,
            vote: answerVoteModel.vote.toString(),
            created_at: answerVoteModel.created_at,
            updated_at: answerVoteModel.updated_at,
        });

        

        if (answerVoteCreated) {
            return res.status(200).json(answerVoteCreated);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}


// getAllAnswerVotes

export const getAllAnswerVotes: RequestHandler = async (req: Request, res: Response) => {
    try {
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // get all answer votes

        const answerVotes = await db.exec("getAllAnswerVotes", {});

        if (answerVotes) {
            return res.status(200).json(answerVotes);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// getAnswerVoteById

export const getAnswerVoteById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // get answer vote by id

        const answerVote = await db.exec("getAnswerVoteById", { id: id });

        if (answerVote) {
            return res.status(200).json(answerVote);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}


// updateAnswerVote

export const updateAnswerVote: RequestHandler = async (req: Request, res: Response) => {
    try{

        const { id } = req.params;
        const { user_id, answer_id, vote } = req.body;
        // get answer vote by id

        const answerVoteToBeUpdated:AnswerVoteModel[] = await db.exec("getAnswerVoteById", { id: id }) as unknown as AnswerVoteModel[];

        if (answerVoteToBeUpdated.length > 0) {
            const answerVoteModel = new AnswerVoteModel(
                id,
                new Date(answerVoteToBeUpdated[0].created_at).toISOString(),
                new Date().toISOString(),
                user_id,
                answer_id,
                vote
            );

            const { error } = validateAnswerVote(answerVoteModel);
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }

            // check for connection to db
            if (!db.checkConnection()) {
                return res.status(500).json({ message: "Internal server error" });
            }

            // update answer vote

            const answerVoteUpdated = await db.exec("insertOrUpdateAnswerVote", {
                id: answerVoteModel.id,
                user_id: answerVoteModel.user_id,
                answer_id: answerVoteModel.answer_id,
                vote: answerVoteModel.vote.toString(),
                created_at: answerVoteModel.created_at,
                updated_at: answerVoteModel.updated_at
            });

            if (answerVoteUpdated) {
                return res.status(200).json(answerVoteUpdated);
            }
            else {
                return res.status(500).json({ message: "Internal server error" });
            }
        }

    }
    catch (err: any) {
        console.log(err);
        
        return res.status(500).json({ message: "Internal server error" });
    }
}