import { createEffect, ofType,Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from "rxjs/operators";
import { CompanyService } from "../../services/company.service";


import * as companiesActions from "../actions/companies.actions";



@Injectable()
export class CompaniesEffects {
    constructor(private actions$: Actions, private companyService: CompanyService) {}
    
    loadCompanies$ = createEffect(() =>
        this.actions$.pipe(
        ofType(companiesActions.loadCompanies),
        mergeMap(() =>
            this.companyService.getCompanies().pipe(
            map((companies) => companiesActions.loadCompaniesSuccess({ companies })),
            catchError(async (error) => companiesActions.loadCompaniesError({ error }))
            )
        )
        )
    );
    }