import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company.interface';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectTags } from '../state/selectors/tag.selector';
import { Tag } from '../interfaces/tag.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 
  companies: Company[] = []
  constructor(private http: HttpClient,private store: Store<AppState>) { }


  getCompanies(): Observable<Company[]> {

    // include tag in company and return companies as observable

    let tags: Tag[] = [];
    this.store.select(selectTags).subscribe((data) => {
      tags = data;
    }
    )
    // add tag to company
    return this.http.get<Company[]>('http://localhost:4000/api/companies').pipe(
      tap((data)=>{
        data.forEach((company)=>{
          company.tag = tags.find((tag)=>tag.id === company.tag_id) as Tag;
        })
      })
    )

  
  }


}
