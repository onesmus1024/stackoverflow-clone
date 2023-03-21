import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loggedInUser } from 'src/app/interfaces/loggedInUser.interface';
import { Router } from '@angular/router';
import { userToLogin } from 'src/app/interfaces/userToLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router,private http: HttpClient) { }
  login(user:userToLogin):Observable<loggedInUser> {
    return this.http.post<loggedInUser>('http://localhost:4000/api/users/login',user);

  }





      
  }
