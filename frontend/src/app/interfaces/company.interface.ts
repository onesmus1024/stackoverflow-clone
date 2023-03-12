import { Tag } from "./tag.interface";

export interface Company {
    id: string;
    name: string;
    logo_url: string;
    tag:Tag,
    description: string;
    created_at: string;
    updated_at: string;
}