import QuestionModel from "../models/question.model";
import { Request, Response , RequestHandler} from "express";
import db from "../databasehelper/db-connection";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import dotenv from "dotenv";
import validateQuestion from "../helpers/question.validate";
import { Question } from "../interfaces/question.interface";
import { Answer } from "../interfaces/answer.interface";
dotenv.config({ path: path.join(__dirname, "../../.env") });




export const createQuestion: RequestHandler = async (req: Request, res: Response) => {

   try {

     const { question, description, code,views } = req.body;
    const questionModel = new QuestionModel(
        uuidv4(),
        question,
        description,
        code,
        new Date().toISOString(),
        new Date().toISOString(),
        req.body.user.id,
        views,
        "0"
    );

    console.log(questionModel);
    
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

export const getAllQuestions : RequestHandler = async (req: Request, res: Response) => {

       try {

        // interface for pagination
        interface Pagination {
            page: number;
            pageSize: number;
        }
        // get page and pageSize from query params
        const { page, pageSize } = req.query;

        const pages: Pagination = {
            page: page ? parseInt(page as string) : 1,
            pageSize: pageSize ? parseInt(pageSize as string) : 10
        };

        // if page or pageSize is not provided use default values
        const pageValue = page ? page : 1;
        const pageSizeValue = pageSize ? pageSize : 10;
        // check for connection to db
        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }
        

        const questions:Question[] =await (await db.exec("getAllQuestions", {page: pages.page.toString(), pageSize: pages.pageSize.toString()}));



        if (questions) {
       
            const getFormattedQuestions = async (questions:Question[]) => {
                return Promise.all(questions.map(async (question:Question) => {
                    let questionVotes = await db.exec("getVotesByQuestionId", { question_id: question.id });
                    question.votes =[]
                    questionVotes.forEach((vote:any) => {
                        question.votes.push(vote)
                    });
                    const getAnswersForQuestionForQuestion = async (questionId:string) => {
                            return Promise.all( ((await db.exec("getAnswersByQuestionId", { question_id: question.id })) as Answer[]).map(async (answer: Answer) => {
                                let user = await db.exec("getUserById", { id: answer.user_id });
                                let answerVotes = await db.exec("getAnswerVoteByAnswerId", { answer_id: answer.id });
                                answer.votes =[]
                                answerVotes.forEach((vote:any) => {
                                    answer.votes.push(vote.vote)
                                });
                                let answerComments = await db.exec("getAnswerCommentByAnswerId", { answer_id: answer.id });
                                answer.comments = answerComments;
                                answer.user = user[0].name;
                                console.log(answer)
                                return answer;
                            }))
                    }

                    let answers = await getAnswersForQuestionForQuestion(question.id);
                    question.answers = answers as unknown as Answer[];
                    let tags = await db.exec("getTagById", { id: question.tag_id });
                    question.tags = tags;
                    let user = await db.exec("getUserById", { id: question.user_id });
                    question.user = user[0];

                    return question;
                }));
            }

            await getFormattedQuestions(questions);

            
            return res.status(200).json(questions);
        }

        return res.status(404).json({ message: "Questions not found" });

       }
    
         catch (error : any) {
            console.log(error);
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
    const questionToUpdate:QuestionModel[] = await db.exec("getQuestionById", { id }) as unknown as QuestionModel[];

    if (questionToUpdate.length === 0) {
        return res.status(404).json({ message: "Question not found" });
    }
    console.log("quiz",questionToUpdate)
    const { question, description, code, user_id,views } = req.body;

    const questionModel = new QuestionModel(
        id,
        question,
        description,
        code,
        new Date(questionToUpdate[0].created_at).toISOString(),
        new Date().toISOString(),
        user_id,
        views,
        questionToUpdate[0].is_deleted.toString() === "true" ? "1" : "0"
    );

    console.log(questionModel)

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
        const { question_id } = req.params;

        const increased = db.exec("increaseQuestionViews", {question_id });
    
    
        if (increased) {
            return res.status(200).json(increased);
        }
    
        return res.status(404).json({ message: "Question not found" });
    }
    catch (error : any) {
        return res.status(500).json({ message: error.message });
    }


}



function async(id: string) {
    throw new Error("Function not implemented.");
}



