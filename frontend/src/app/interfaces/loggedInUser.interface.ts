import { User } from "./user.interface";



export interface loggedInUser {
    user?: User[];
    is_admin?: string;
    id: string;
    username: string;
    email: string;
    token : string;

}