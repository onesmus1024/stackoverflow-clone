import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from 'src/app/interfaces/company.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { SingleCompanyComponent } from './single-company/single-company.component';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, SingleCompanyComponent],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.store.select('companies').subscribe(({ companies, loading, error }) => {
      this.companies = companies;
      console.log(this.companies);
    });
  }
  

}
