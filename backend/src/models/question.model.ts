

class QuestionModel {
    id: string;
    question: string;
    description: string;
    code: string;
    created_at: string;
    updated_at: string;
    user_id: string;
    views: number;
    is_deleted: string;

    constructor(id: string, question: string, description: string, code: string, created_at: string, updated_at: string, user_id: string, views: number, is_deleted: string) {
        this.id = id;
        this.question = question;
        this.description = description;
        this.code = code;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.user_id = user_id;
        this.views = views;
        this.is_deleted = is_deleted;
    }
}

export default QuestionModel