import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { userToRegister } from 'src/app/interfaces/userToRegister.interface';
import { loggedInUser } from 'src/app/interfaces/loggedInUser.interface';
import * as registerUserActions from 'src/app/state/actions/registerUser.actions'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private store: Store<AppState>, private router: Router, private http: HttpClient) { }


  registerUser(user: userToRegister) {
    return this.http.post('http://localhost:4000/api/users/register', user);
  }






}
