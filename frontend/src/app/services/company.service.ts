import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companies: Company[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
      tag: {
        id: '1',
        tag: 'Angular',
        created_at: ' ',
        updated_at: ' ',
        description: ' '
      },
      description: ' Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. As of 2019, it was the world\'s largest software maker by revenue, and one of the world\'s most valuable companies. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.',
      created_at: '2020-01-01',
      updated_at: '2020-01-01',
    },
    {
      id: '1',
      name: 'Microsoft',
      logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
      tag: {
        id: '1',
        tag: 'Angular',
        created_at: ' ',
        updated_at: ' ',
        description: ' '
      },
      description: ' Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. As of 2019, it was the world\'s largest software maker by revenue, and one of the world\'s most valuable companies. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.',
      created_at: '2020-01-01',
      updated_at: '2020-01-01',
    },
    {
      id: '1',
      name: 'Microsoft',
      logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
      tag: {
        id: '1',
        tag: 'Angular',
        created_at: ' ',
        updated_at: ' ',
        description: ' '
      },
      description: ' Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. As of 2019, it was the world\'s largest software maker by revenue, and one of the world\'s most valuable companies. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.',
      created_at: '2020-01-01',
      updated_at: '2020-01-01',
    }
  ]
  constructor() { }

  getCompanies(): Observable<Company[]> {
    return new Observable(subscriber => {
      subscriber.next(this.companies);
    });
  }
}
