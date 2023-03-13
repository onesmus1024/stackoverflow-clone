class TagModel {
    id: string;
    tag: string;
    description: string;
    created_at: string;
    updated_at: string;
    is_deleted: string;

    constructor(id: string, tag: string, description: string, created_at: string, updated_at: string, is_deleted: string) {
        this.id = id;
        this.tag = tag;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.is_deleted = is_deleted;
    }
}


export default TagModel