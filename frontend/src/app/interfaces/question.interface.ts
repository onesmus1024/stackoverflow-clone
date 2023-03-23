import { User } from './user.interface';
import { Answer } from './answer.interface';
import { Tag } from './tag.interface';
import { QuestionVote } from './questionVote.interface';
export interface Question {
    is_deleted?: string;
    user_id?: string;
    id: string;
    question: string;
    description: string;
    code : string;
    created_at : string;
    updated_at : string;
    user : User;
    answers : Answer[];
    tags : Tag[];
    votes : QuestionVote[];
    views : number;
}