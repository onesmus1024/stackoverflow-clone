import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const token = localStorage.getItem('token');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1Y2I5ZjYzLTc1N2QtNDQ1My1iYWI4LWY5YjliMWFlNzQ0YiIsImVtYWlsIjoiam9uYXRoYW5uZGFtYnVraTE2QGdtYWlsLmNvbSIsIm5hbWUiOiJpbnN0cnVjdG9yIiwiaWF0IjoxNjc5MzQ3MzIyLCJleHAiOjE2NzkzNjUzMjJ9.Q9TmQ4rgBDByLE644PZgD_XNeGRqAVK4Q66A3a4Q0is';
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
