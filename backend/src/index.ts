import express, { Express } from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { Request, Response } from "express";
import userRouter from "./routers/user.router";
import answerRouter from "./routers/answer.router";
import answerVoteRouter from "./routers/answerVote.router";
import commentRouter from "./routers/comment.router";
import questionRouter from "./routers/question.router";
import questionVoteRouter from "./routers/questionVote.router";
import tagRouter from "./routers/tag.router";
import companyRouter from "./routers/company.router";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/answers", answerRouter);
app.use("/api/answerVotes", answerVoteRouter);
app.use("/api/comments", commentRouter);
app.use("/api/questions", questionRouter);
app.use("/api/questionVotes", questionVoteRouter);
app.use("/api/tags", tagRouter);
app.use("/api/companies", companyRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
}
);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
}
);

