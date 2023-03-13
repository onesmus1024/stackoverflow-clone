

class CommentModel {
    id: string;
    comment: string;
    created_at: string;
    updated_at: string;
    user_id: string;
    answer_id: string;
    is_deleted: string;

    constructor(id: string, comment: string, created_at: string, updated_at: string, user_id: string, answer_id: string, is_deleted: string) {
        this.id = id;
        this.comment = comment;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.user_id = user_id;
        this.answer_id = answer_id;
        this.is_deleted = is_deleted;
    }
}


export default CommentModel

