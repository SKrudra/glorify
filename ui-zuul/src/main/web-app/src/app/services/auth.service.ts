import { Injectable } from '@angular/core';
import { SecurityContext } from '../models/securityContext';
import { catchError, tap} from 'rxjs/operators';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
  securityContext: SecurityContext;
    
  constructor(private http:HttpClient) {
    this.securityContext = new SecurityContext();
  }
    
  login(url:string,form:FormGroup): Observable<number> { 
    return this.http.post<number>(url,form.value).pipe(
      tap(sc => {
          if (sc != null) {
          this.securityContext.userId = sc;
        }
      }),
      catchError(this.handleError('authenticate', null))
    );
  }
    
  isLoggedIn() : Boolean {
    return !!this.securityContext.userId;   
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
        // this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
