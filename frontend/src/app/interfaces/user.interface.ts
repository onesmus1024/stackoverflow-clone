

export interface User {
    user?: any;
    id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
    is_sent?:string,
    is_admin?:string
}