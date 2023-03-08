import { User } from "./user.interface";


export interface Comment {
    id: string;
    comment: string;
    created_at: string;
    updated_at: string;
    user: User;
    answer_id: string;
}