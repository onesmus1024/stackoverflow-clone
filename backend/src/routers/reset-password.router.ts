import { Router } from "express";
import { resetPassword } from "../controllers/reset-password";
import { forgotPassword } from "../controllers/forgotPassword.controller";


const resetPasswordRouter = Router();

resetPasswordRouter.post("/forgot-password", forgotPassword);
resetPasswordRouter.post("/reset-password/:id/:token", resetPassword);



export default resetPasswordRouter;

