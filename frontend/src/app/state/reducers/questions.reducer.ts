import { createReducer,on } from "@ngrx/store";
import * as QuestionsActions from '../actions/questions.actions';

import { Question } from "src/app/interfaces/question.interface";
import { QuestionVote } from "src/app/interfaces/questionVote.interface";

export interface QuestionsState {
    questions: Question[];
    loading: boolean;
    error: any;
}


export const initialState: QuestionsState = {
    questions: [],
    loading: false,
    error: null
};


export const questionsReducer = createReducer(
    initialState,
    on(QuestionsActions.loadQuestions, (state) => {
        return {
            ...state,
            loading: true
        }
    }
    ),
    on(QuestionsActions.loadQuestionsSuccess, (state, { questions }) => {
        return {
            ...state,
            loading: false,
            questions: [...questions]
        }
    }
    ),
    on(QuestionsActions.loadQuestionsFailure, (state, { error }) => {
        return {
            ...state,
            loading: false,
            error
        }
    }
    ),
    on(QuestionsActions.addQuestion, (state, { question }) => {
        return {
            ...state,
            loading: true
        }
    }
    ),

    on(QuestionsActions.addQuestionSuccess, (state, { question }) => {
        return {
            ...state,
            questions: [...state.questions, question]
        }
    }
    ),

    on(QuestionsActions.addQuestionFailure, (state, { error }) => {
        return {
            ...state,
            error
        }
    }
    ),
    on(QuestionsActions.deleteQuestion, (state, { question }) => {
        return {
            ...state,
            questions: state.questions.filter((q: Question) => q.id !== question.id)
        }
    }

    ),

    on(QuestionsActions.addAnswer, (state, {answer}) => {
        return {
            ...state,
            loading: true
        }
    }
    ),

    on(QuestionsActions.addAnswerSuccess, (state, {answer}) => {
        return {
            ...state,
            loading: false,
            questions: state.questions.map((q: Question) => {
                if (q.id === answer.question_id) {
                    return {
                        ...q,
                        answers: [...q.answers, answer]
                    }
                }
                return q;
            })
        }
    }
    ),

    on(QuestionsActions.addAnswerFailure, (state, {error}) => {
        return {
            ...state,
            loading: false,
            error
        }
    }
    ),


  

 



    

);

