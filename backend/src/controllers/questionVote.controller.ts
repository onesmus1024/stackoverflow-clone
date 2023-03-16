import QuestionVoteModel from "../models/questionVote.model";
import { Response, Request, RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import db from "../databasehelper/db-connection";
import path from "path";
import dotenv from "dotenv";
import validateQuestionVote from "../helpers/questionVote.validate";
dotenv.config({ path: path.join(__dirname, "../../.env") });


export const createQuestionVote: RequestHandler = async (req: Request, res: Response) => {

    try {

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }
       
        const { question_id, user_id, vote } = req.body;
        const questionVoteModel = new QuestionVoteModel(
            uuidv4(),
            vote,
            new Date().toISOString(),
            new Date().toISOString(),
            user_id,
            question_id
        );

        const { error } = validateQuestionVote(questionVoteModel);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const questionVoteCreated = await db.exec("insertOrUpdateQuestionVote", {
            id: questionVoteModel.id,
            question_id: questionVoteModel.question_id,
            user_id: questionVoteModel.user_id,
            vote: questionVoteModel.vote.toString(),
            created_at: questionVoteModel.created_at,
            updated_at: questionVoteModel.updated_at
        });

        if (questionVoteCreated) {
            // return questionVote created
            return res.status(201).json(questionVoteCreated);
        }

        return res.status(400).json({ message: "QuestionVote not created" });






    }
    catch (error: any) {

        return res.status(500).json({ message: error.message });


    }

}

export const getAllQuestionVotes: RequestHandler = async (req: Request, res: Response) => {
    try {
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }
        const questionVotes = await db.exec("getAllQuestionVotes", {});
        if (questionVotes) {
            return res.status(200).json(questionVotes);
        }
        return res.status(400).json({ message: "QuestionVotes not found" });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

export const getQuestionVoteById: RequestHandler = async (req: Request, res: Response) => {
    try {
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }
        const questionVote = await db.exec("getQuestionVoteById", { id: req.params.id });
        if (questionVote) {
            return res.status(200).json(questionVote);
        }
        return res.status(400).json({ message: "QuestionVote not found" });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateQuestionVote: RequestHandler = async (req: Request, res: Response) => {
    try {
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }
        const questionVote:QuestionVoteModel[] = await db.exec("getQuestionVoteById", { id: req.params.id }) as unknown as QuestionVoteModel[];
        if (questionVote) {
             // id: string;
        // vote: number;
        // created_at: string;
        // updated_at: string;
        // user_id: string;
        // question_id: string;
            const { question_id, user_id, vote } = req.body;
            const questionVoteModel = new QuestionVoteModel(
                questionVote[0].id,
                vote,
                new Date(questionVote[0].created_at).toISOString(),
                new Date().toISOString(),
                question_id,
                user_id,
            );
            const { error } = validateQuestionVote(questionVoteModel);
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }
            const questionVoteUpdated = await db.exec("insertOrUpdateQuestionVote", {
                id: questionVoteModel.id,
                question_id: questionVoteModel.question_id,
                user_id: questionVoteModel.user_id,
                vote: questionVoteModel.vote.toString(),
                created_at: questionVoteModel.created_at,
                updated_at: questionVoteModel.updated_at
            });
            if (questionVoteUpdated) {
                return res.status(200).json(questionVoteUpdated);
            }
            return res.status(400).json({ message: "QuestionVote not updated" });
        }
        return res.status(400).json({ message: "QuestionVote not found" });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}


export const deleteQuestionVote: RequestHandler = async (req: Request, res: Response) => {
    try {
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }
        const questionVote = await db.exec("getQuestionVoteById", { id: req.params.id });
        if (questionVote) {
            const questionVoteDeleted = await db.exec("deleteQuestionVote", { id: req.params.id });
            if (questionVoteDeleted) {
                return res.status(200).json(questionVoteDeleted);
            }
            return res.status(400).json({ message: "QuestionVote not deleted" });
        }
        return res.status(400).json({ message: "QuestionVote not found" });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}





