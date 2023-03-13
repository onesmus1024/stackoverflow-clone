
class CompanyModel {
    id: string;
    name: string;
    logo_url: string;
    tag_id: string;
    description: string;
    created_at: string;
    updated_at: string;
    is_deleted: string;

    constructor(id: string, name: string, logo_url: string, tag_id: string, description: string, created_at: string, updated_at: string, is_deleted: string) {
        this.id = id;
        this.name = name;
        this.logo_url = logo_url;
        this.tag_id = tag_id;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.is_deleted = is_deleted;
    }
}



export default CompanyModel