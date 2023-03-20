import { User } from './user.interface';

export interface QuestionVote {
    id: string;
    vote: number;
    created_at: string;
    updated_at: string;
    user: User;
    question_id: string;
}