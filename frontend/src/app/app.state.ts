import { QuestionsState } from "./state/reducers/questions.reducer";
import { UsersState } from "./state/reducers/users.reducer";
import { TagsState } from "./state/reducers/tags.reducer";
import { CompaniesState } from "./state/reducers/companies.redicer";
import { loggedInUserState } from "./state/reducers/loggedInUser.reducer";
import { QuestionVotesState } from "./state/reducers/questionVote.reducer";
import { CommentsState } from "./state/reducers/comment.reducer";
import { AnswerVotesState } from "./state/reducers/answerVote.redicer";
import { AnswersState } from "./state/reducers/answer.reducer";

export interface AppState {
    questions: QuestionsState;
    users: UsersState;
    tags: TagsState;
    companies: CompaniesState;
    loggedInUser: loggedInUserState;
    questionVotes: QuestionVotesState;
    comments: CommentsState;
    answerVotes: AnswerVotesState;
    answers: AnswersState;
    
    
}





