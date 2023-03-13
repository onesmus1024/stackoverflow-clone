
class AnswerModel {
    id: string;
    answer: string;
    created_at: string;
    updated_at: string;
    user_id: string;
    question_id: string;
    code: string;
    is_deleted: string;

    constructor(id: string, answer: string, created_at: string, updated_at: string, user_id: string, question_id: string, code: string, is_deleted: string) {
        this.id = id;
        this.answer = answer;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.user_id = user_id;
        this.question_id = question_id;
        this.code = code;
        this.is_deleted = is_deleted;
    }
}

export default AnswerModel