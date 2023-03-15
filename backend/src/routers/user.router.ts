import { Router } from "express";
import { login, register, getUserById, updateUser, deleteUser,getAllUsers } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/", getAllUsers);


export default userRouter;

