import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiConfig } from 'src/app/core/config/api.config';
import { Category } from 'src/app/shared/models/category.model';
import { Post } from 'src/app/shared/models/post.model';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiConfig.apiUrl + 'category')
      .pipe(
        tap(_ => this.log('fetched Categories')),
        catchError(this.handleError('getCategories', []))
      );
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiConfig.apiUrl + 'post')
      .pipe(
        tap(_ => this.log('fetched Posts')),
        catchError(this.handleError('getPosts', []))
      );
  }

  getPostsByCategory(id: any): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiConfig.apiUrl + 'bycategory/' + id)
      .pipe(
        tap(_ => this.log('fetched Posts')),
        catchError(this.handleError('getPosts', []))
      );
  }

  getPost(id: any): Observable<Post> {
    return this.http.get<Post>(this.apiConfig.apiUrl + 'post/' + id).pipe(
      tap(_ => console.log(`fetched post by id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
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
