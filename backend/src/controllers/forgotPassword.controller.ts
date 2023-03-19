import Jwt  from "jsonwebtoken";
import { Request, Response,RequestHandler } from "express";
import db from "../databasehelper/db-connection";
import UserModel from "../models/user.model";
import dotenv from "dotenv";
import path from "path";
import sendMail from "../utils/email-helpers/email.helper";
dotenv.config({ path: path.join(__dirname, "../../.env") });





export const forgotPassword:RequestHandler  = async (req: Request, res: Response) => {

    try{

        const { email } = req.body;

        if (!db.checkConnection()) {
            return res.status(500).json({ message: "Internal server error" });
        }

        // check if user exists

        const user: UserModel[] = await db.exec("getUserByEmail", { email: email }) as unknown as UserModel[];

        if (!user[0]) {
            return res.status(400).json({ message: "User not found" });
        }

        // generate token

        const token = Jwt.sign(user[0], process.env.JWT_SECRET as string, { expiresIn: "15m" });

        // send email

        const messageOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Reset Password Link",
            text: `Click the link to reset your password: http://localhost:4200/reset-password/${user[0].id}/${token}`
        };

        await sendMail(messageOptions);

        res.status(200).json({ message: "Email sent" });




    }
    catch (err: any) {
        res.status(500).json({ message: err.message });
    }

}


