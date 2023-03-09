import { QuestionsState } from "./state/reducers/questions.reducer";
import { UsersState } from "./state/reducers/users.reducer";
import { TagsState } from "./state/reducers/tags.reducer";
import { CompaniesState } from "./state/reducers/companies.redicer";

export interface AppState {
    questions: QuestionsState;
    users: UsersState;
    tags: TagsState;
    companies: CompaniesState;
    
}





