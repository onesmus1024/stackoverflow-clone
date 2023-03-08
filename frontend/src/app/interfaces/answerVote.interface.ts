import { User } from "./user.interface";

export interface AnswerVote {
    id: string;
    vote: number;
    created_at: string;
    updated_at: string;
    user: User;
    answer_id: string;
}