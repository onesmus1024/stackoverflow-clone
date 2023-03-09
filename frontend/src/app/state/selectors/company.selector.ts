import { CompaniesState } from "../reducers/companies.redicer";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Company } from "src/app/interfaces/company.interface";

export const selectCompaniesState = createFeatureSelector<CompaniesState>('companies');

export const selectCompanies = createSelector(
    selectCompaniesState,
    (state: CompaniesState) => state.companies
);


export const selectCompaniesLoading = createSelector(
    selectCompaniesState,
    (state: CompaniesState) => state.loading
);

export const selectCompaniesError = createSelector(
    selectCompaniesState,
    (state: CompaniesState) => state.error
);
