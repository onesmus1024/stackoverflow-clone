import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from 'src/app/interfaces/company.interface';

@Component({
  selector: 'app-single-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-company.component.html',
  styleUrls: ['./single-company.component.css']
})
export class SingleCompanyComponent {


  @Input()company: Company = {
    id: '0',
    name: 'microverse',
    logo_url: 'https://www.microverse.org/assets/img/logo.png',
    tag: {
      id: '0',
      tag : 'Angular',
      description : 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
      created_at : "2020-10-10T00:00:00.000Z",
      updated_at : "2020-10-10T00:00:00.000Z"

    },
    description: 'We are a remote school that teaches you how to code',
    created_at: "2020-10-10T00:00:00.000Z",
    updated_at: "2020-10-10T00:00:00.000Z"
  };
    
}
