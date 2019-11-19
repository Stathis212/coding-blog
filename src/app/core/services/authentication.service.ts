import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ApiConfig } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  @Output() isLoggedIn: EventEmitter<any> = new EventEmitter();
  loggedInStatus = false;
  redirectUrl: string;

  constructor(private http: HttpClient, private apiConfig: ApiConfig) {}

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiConfig.apiUrl + 'auth/login', data)
      .pipe(
        tap(_ => {
          this.isLoggedIn.emit(true);
          this.loggedInStatus = true;
        }),
        catchError(this.handleError('auth/login', []))
      );
  }

  logout(): Observable<any> {
    return this.http.post<any>(this.apiConfig.apiUrl + 'auth/logout', {})
      .pipe(
        tap(_ => {
          this.isLoggedIn.emit(false);
          this.loggedInStatus = false;
        }),
        catchError(this.handleError('auth/logout', []))
      );
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.apiConfig.apiUrl + 'auth/register', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('auth/login', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
