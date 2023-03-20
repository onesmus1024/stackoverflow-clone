import { Router } from "express";
import { verifyToken } from "../middlewares/verify.middleware";
import { login, register, getUserById, updateUser, deleteUser,getAllUsers } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/:id",verifyToken, getUserById);
userRouter.put("/:id",verifyToken, updateUser);
userRouter.delete("/:id", verifyToken,deleteUser);
userRouter.get("/",verifyToken, getAllUsers);


export default userRouter;

