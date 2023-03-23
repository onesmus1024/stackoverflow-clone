import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:4000/api/users');
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post('http://localhost:4000/api/password/forgot-password', { email });
  }

  resetPassword(password: string, token: string,id: string): Observable<any> {
    return this.http.post(`http://localhost:4000/api/password/reset-password/${id}/${token}`, { password });
  }

  
}
