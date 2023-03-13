
class QuestionVoteModel {
    id: string;
    vote: number;
    created_at: string;
    updated_at: string;
    user_id: string;
    question_id: string;

    constructor(id: string, vote: number, created_at: string, updated_at: string, user_id: string, question_id: string) {
        this.id = id;
        this.vote = vote;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.user_id = user_id;
        this.question_id = question_id;
    }
}

export default QuestionVoteModel