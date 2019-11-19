import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiConfig } from 'src/app/core/config/api.config';
import { Category } from 'src/app/shared/models/category.model';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiConfig.apiUrl + 'category')
      .pipe(
        tap(_ => this.log('fetched Categories')),
        catchError(this.handleError('getCategories', []))
      );
  }

  getCategory(id: any): Observable<Category> {
    const url = `${this.apiConfig.apiUrl}/category/${id}`;
    return this.http.get<Category>(url).pipe(
      tap(_ => console.log(`fetched category by id=${id}`)),
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiConfig.apiUrl + 'category', category).pipe(
      tap((prod: Category) => console.log(`added category w/ id=${category.id}`)),
      catchError(this.handleError<Category>('addCategory'))
    );
  }

  updateCategory(id: any, category: Category): Observable<any> {
    const url = `${this.apiConfig.apiUrl}/category/${id}`;
    return this.http.put(url, category).pipe(
      tap(_ => console.log(`updated category id=${id}`)),
      catchError(this.handleError<any>('updateCategory'))
    );
  }

  deleteCategory(id: any): Observable<Category> {
    const url = `${this.apiConfig.apiUrl}/category/${id}`;
    return this.http.delete<Category>(url).pipe(
      tap(_ => console.log(`deleted category id=${id}`)),
      catchError(this.handleError<Category>('deleteCategory'))
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
