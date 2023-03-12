import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loggedInUser } from 'src/app/interfaces/loggedInUser.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }
  login():Observable<loggedInUser> {
    return new Observable<loggedInUser>(observer => {

      setTimeout(() => {
        observer.next({id:'1',username:"test",email:"onesmus@gmail.com",token:"token"});

        this.router.navigate(['/home']);
      }, 4000);


    });

  }





      
  }
