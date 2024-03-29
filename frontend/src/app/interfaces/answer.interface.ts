
import { AnswerVote } from './answerVote.interface';
import { User } from './user.interface';
import { Comment } from './comment.interface';
export interface Answer {
    is_sent?: string;
    is_accepted?: string;
    user_id: string;
    id: string;
    answer: string;
    created_at: string; 
    updated_at: string;
    user?: User;
    votes: AnswerVote[];
    code : string;
    comments : Comment[];
    question_id: string;
}
