
class AnswerVoteModel {
    id: string;
    created_at: string;
    updated_at: string;
    user_id: string;
    answer_id: string;
    vote: number;

    constructor(id: string, created_at: string, updated_at: string, user_id: string, answer_id: string, vote: number) {
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.user_id = user_id;
        this.answer_id = answer_id;
        this.vote = vote;
    }
}


export default AnswerVoteModel