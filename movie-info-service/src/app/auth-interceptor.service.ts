import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user && user.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${user.accessToken}`
        }
      });
    }
    return next.handle(request);
  }

  constructor() { }
}
