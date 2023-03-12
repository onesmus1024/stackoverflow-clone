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
            questions: [...state.questions, question]
        }
    }
    ),
    

);





// on(QuestionsActions.upvoteQuestion, (state, { question }) => {
//     return {
//         ...state,
//         questions: state.questions.map((q: Question) => {
//             if (q.id === question.id) {
            
//                 const vote = q.votes.find((vote: QuestionVote) => vote.user.id === user.id);
//                 console.log("user vote",vote?.user.id);
//                 console.log("user id",user.id);
//                 if (vote) {
//                     console.log(vote);
//                     vote.vote = vote.vote === 0 ? 1 : 0;
//                 } else {
//                     q.votes = [...q.votes,{
//                         id: '1',
//                         vote: 1,
//                         created_at: '2020-10-10 10:10:10',
//                         updated_at: '2020-10-10 10:10:10',
//                         user: user,
//                         question_id: question.id
//                     }];
//                 }
//             }
//             return q;
//         }
//         )
//     }
// }
// )

