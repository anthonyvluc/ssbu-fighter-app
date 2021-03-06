import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Fighter } from './fighter';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FighterService {

  /* URL to web api */
  private apiUrl = 'https://ssbu-fighter-api.herokuapp.com/api';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
   ) { }

  /* GET fighters */
  getFighters(): Observable<Fighter[]> {
    return this.http.get<Fighter[]>(this.apiUrl)
      .pipe(
        tap(_ => this.log('fetched fighters')),
        catchError(this.handleError('getFighters', []))
      );
  }

  /* GET fighter by id */
  getFighter(id: string): Observable<Fighter> {
    return this.http.get<Fighter>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched fighter id=${id}`)),
        catchError(this.handleError<Fighter>(`getFighter id=${id}`))
      );
  }

  /* GET fighters whose name contains search term */
  searchFighters(term: string): Observable<Fighter[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Fighter[]>(`${this.apiUrl}?name=${term}`)
    .pipe(
      tap(_ => this.log(`found fighters matching "${term}"`)),
      catchError(this.handleError<Fighter[]>('searchFighters', []))
    );
  }

  /* PUT: update the fighter on the server */
  // updateFighter (fighter: Fighter): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //   return this.http.put(this.apiUrl, fighter, httpOptions)
  //   .pipe(
  //     tap(_ => this.log(`updated fighter id=${fighter.id}`)),
  //     catchError(this.handleError<any>('updateFighter'))
  //   );
  // }

  /**
   * Log a FighterService message with the MessageService
   */
  private log(message: string) {
    this.messageService.add(`FighterService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
