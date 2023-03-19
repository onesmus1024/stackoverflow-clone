import { Request,Response,RequestHandler } from "express";
import db from "../databasehelper/db-connection";
import UserModel from "../models/user.model";
import dotenv from "dotenv";
import path from "path";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
dotenv.config({ path: path.join(__dirname, "../../.env") });



export const resetPassword:RequestHandler = async (req: Request, res: Response) => {


    try{

        const {password} = req.body;
        const token = req.params.token;
        const id = req.params.id;

        // verify token
        Jwt.verify(token, process.env.JWT_SECRET as string, (err, authData) => {
            if (err) {
                res.sendStatus(403).json({ message: "Link has expired" });
            } else {
                req.body.user = authData;
            }
        });

        // get user from db by id

        const userFromDb: UserModel[] = await db.exec("getUserById", { id: id }) as unknown as UserModel[];

        // check if user exists

        if (!userFromDb[0]) {
            return res.status(400).json({ message: "User not found" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // update password

        const user: UserModel = {
            id: userFromDb[0].id,
            email: userFromDb[0].email,
            password: hashedPassword,
            name: userFromDb[0].name,
            created_at: userFromDb[0].created_at,
            updated_at: userFromDb[0].updated_at,
            is_admin: userFromDb[0].is_admin,
            is_sent: userFromDb[0].is_sent,
            is_deleted: userFromDb[0].is_deleted
        };

        const updatedUser:UserModel[] = await db.exec("updateUser", {...user}) as unknown as UserModel[];

        if (!updatedUser[0]) {
            return res.status(500).json({ message: "Internal server error" });
        }

        res.status(200).json({ message: "Password updated" });
        
    }
    catch (err: any) {
        res.status(500).json({ message: err.message });
    }

}