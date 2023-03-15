import QuestionModel from "../models/question.model";
import { Request, Response , RequestHandler} from "express";
import db from "../databasehelper/db-connection";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import dotenv from "dotenv";
import validateQuestion from "../helpers/question.validate";
dotenv.config({ path: path.join(__dirname, "../../.env") });


// id: string;
// question: string;
// description: string;
// code: string;
// created_at: string;
// updated_at: string;
// user_id: string;
// views: number;
// is_deleted: string;



export const createQuestion: RequestHandler = async (req: Request, res: Response) => {

   try {

     const { question, description, code, user_id } = req.body;
    const questionModel = new QuestionModel(
        uuidv4(),
        question,
        description,
        code,
        new Date().toISOString(),
        new Date().toISOString(),
        user_id,
        0,
        "0"
    );
        
    const { error } = validateQuestion(questionModel);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // check for connection to db
    if (!db.checkConnection()) {
        return res.status(500).json({ message: "Internal server error" });
    }

    // create question

    const questionCreated = await db.exec("insertOrUpdateQuestion", {
        id: questionModel.id,
        question: questionModel.question,
        description: questionModel.description,
        code: questionModel.code,
        created_at: questionModel.created_at,
        updated_at: questionModel.updated_at,
        user_id: questionModel.user_id,
        views: questionModel.views.toString(),
        is_deleted: questionModel.is_deleted
    });

    if (questionCreated) {
        // return question created
        return res.status(201).json(questionCreated);
    }

    return res.status(400).json({ message: "Question not created" });

    } catch (error : any) {
        return res.status(500).json({ message: error.message });
    }

}

// get all questions

export const getAllQuestios : RequestHandler = async (req: Request, res: Response) => {
    
       try {

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        const questions = await db.exec("getAllQuestions", {});

        if (questions) {
            return res.status(200).json(questions);
        }

        return res.status(404).json({ message: "Questions not found" });

       }
    
         catch (error : any) {
            return res.status(500).json({ message: error.message });
        }
}




// get question by id

export const getQuestionById : RequestHandler = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        const question = await db.exec("getQuestionById", { id });

        if (question) {
            return res.status(200).json(question);
        }

        return res.status(404).json({ message: "Question not found" });

    } catch (error : any) {
        return res.status(500).json({ message: error.message });
    }

}


// update question

export const updateQuestion : RequestHandler = async (req: Request, res: Response) => {


    

    try {
        const { id } = req.params;

    // get question by id
    const question:QuestionModel = await db.exec("getQuestionById", { id }) as unknown as QuestionModel;

    if (!question) {
        return res.status(404).json({ message: "Question not found" });
    }

    const { question: questionBody, description, code, user_id } = req.body;

    const questionModel = new QuestionModel(
        id,
        questionBody,
        description,
        code,
        question.created_at,
        new Date().toISOString(),
        user_id,
        question.views,
        question.is_deleted
    );

    const { error } = validateQuestion(questionModel);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // check for connection to db
    if (!db.checkConnection()) {
        return res.status(500).json({ message: "Internal server error" });
    }

    // update question

    const questionUpdated = await db.exec("insertOrUpdateQuestion", {
        id: questionModel.id,
        question: questionModel.question,
        description: questionModel.description,
        code: questionModel.code,
        created_at: questionModel.created_at,
        updated_at: questionModel.updated_at,
        user_id: questionModel.user_id,
        views: questionModel.views.toString(),
        is_deleted: questionModel.is_deleted
    });

    if (questionUpdated) {
        // return question created
        return res.status(200).json(questionUpdated);
    }

    return res.status(400).json({ message: "Question not updated" });

    } catch (error : any) {
        return res.status(500).json({ message: error.message });
        
    }
}


// delete question

export const deleteQuestion : RequestHandler = async (req: Request, res: Response) => {
    
        try {
    
            const { id } = req.params;
    
            // check for connection to db
            if (!db.checkConnection()) {
                return res.status(500).json({ message: "Internal server error" });
            }
    
            const questionDeleted = await db.exec("deleteQuestion", { id });
    
            if (questionDeleted) {
                return res.status(200).json(questionDeleted);
            }
    
            return res.status(404).json({ message: "Question not found" });
    
        } catch (error : any) {
            return res.status(500).json({ message: error.message });
        }
    
    }


// update question views

export const increaseQuestionViews : RequestHandler = async (req: Request, res: Response) => {

    try{
        const { id } = req.params;

        const increased = db.exec("updateQuestionViews", { id });
    
    
        if (increased) {
            return res.status(200).json(increased);
        }
    
        return res.status(404).json({ message: "Question not found" });
    }
    catch (error : any) {
        return res.status(500).json({ message: error.message });
    }


}



