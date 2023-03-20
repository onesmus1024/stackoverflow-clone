import AnswerModel from "../models/answer.model";
import { Request, Response, RequestHandler } from "express";
import db from "../databasehelper/db-connection";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import dotenv from "dotenv";
import validateAnswer from "../helpers/answer.validate";
dotenv.config({ path: path.join(__dirname, "../../.env") });




// create answer
export const createAnswer: RequestHandler = async (req: Request, res: Response) => {

    try {

        const { answer, user_id, question_id, code,is_accepted,is_sent } = req.body;
   
        const answerModel = new AnswerModel(
            uuidv4(),
            answer,
            new Date().toISOString(),
            new Date().toISOString(),
            user_id,
            question_id,
            code,
            "0",
            is_accepted,
            is_sent
        );


        const { error } = validateAnswer(answerModel);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        console.log(answerModel);
        // create answer

        const answerCreated = await db.exec("insertOrUpdateAnswer", {
            id: answerModel.id,
            answer: answerModel.answer,
            created_at: answerModel.created_at,
            updated_at: answerModel.updated_at,
            user_id: answerModel.user_id,
            question_id: answerModel.question_id,
            code: answerModel.code,
            is_deleted: answerModel.is_deleted,
            is_accepted: answerModel.is_accepted,
            is_sent: answerModel.is_sent
        });


        if (answerCreated) {
            return res.status(200).json(answerCreated);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}


// get all answers
export const getAllAnswers: RequestHandler = async (req: Request, res: Response) => {

    try {

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // get all answers
        const answers = await db.exec("getAllAnswers", {});

        if (answers) {
            return res.status(200).json(answers);
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

// get answer by id
export const getAnswerById: RequestHandler = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // get answer by id
        const answer = await db.exec("getAnswerById", {
            id: id
        });

        if (answer) {
            return res.status(200).json(answer);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

//update answer

export const updateAnswer: RequestHandler = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const { answer, code,is_accepted,is_sent} = req.body;

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        const answerToUpdate:AnswerModel[] = await db.exec("getAnswerById", {
            id: id
        }) as unknown as AnswerModel[];

        if (!answerToUpdate) {
            return res.status(404).json({ message: "Answer not found" });
        }

        const answerModel = new AnswerModel(
            answerToUpdate[0].id,
            answer,
            new Date(answerToUpdate[0].created_at).toISOString(),
            new Date().toISOString(),
            answerToUpdate[0].user_id,
            answerToUpdate[0].question_id,
            code,
            answerToUpdate[0].is_deleted.toString(),
            is_accepted.toString(),
            is_sent.toString()
        );

        const { error } = validateAnswer(answerModel);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // update answer

        const answerUpdated = await db.exec("insertOrUpdateAnswer", {
            id: answerModel.id,
            answer: answerModel.answer,
            created_at: answerModel.created_at,
            updated_at: answerModel.updated_at,
            user_id: answerModel.user_id,
            question_id: answerModel.question_id,
            code: answerModel.code,
            is_deleted: answerModel.is_deleted,
            is_accepted: answerModel.is_accepted,
            is_sent: answerModel.is_sent
        });

        if (answerUpdated) {
            return res.status(200).json(answerUpdated);
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }


    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}



// delete answer
export const deleteAnswer: RequestHandler = async (req: Request, res: Response) => {
    
        try {
    
            const {id } = req.params;

            // check for connection to db
            if (!db.checkConnection()) {
                return res.status(500).json({ message: "Internal server error" });
            }

            // delete answer

            const answerDeleted = await db.exec("deleteAnswer", {
                id: id
            });

            if (answerDeleted) {
                return res.status(200).json(answerDeleted);
            }
            else {
                return res.status(500).json({ message: "Internal server error" });
            }

        }

        catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }


    


