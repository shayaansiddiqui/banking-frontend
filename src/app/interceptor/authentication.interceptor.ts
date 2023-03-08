import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {map, Observable, retry} from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  private authToken: any;
  private authRequest: any;
  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req1 = request.clone({ url: `${request.url}` });
    // Check if the user is logged in
    if(this.authService.isLoggedIn())
    {
      // Get the auth token from the service.
      this.authToken = this.authService.getToken();
    }

    // Clone the request and set the new header in one step.
    if (this.authToken && req1.url != 'https://jsonip.com') {
      this.authRequest = req1.clone({
        setHeaders: {Authorization: `Bearer ${this.authToken}`}
      });
    } else {
      this.authRequest = req1.clone();
    }

    // send cloned request with header to the next handler.
    return next.handle(this.authRequest).pipe(
      retry(1),
      map(response => {
        return response;
      })
    );
  }
}
