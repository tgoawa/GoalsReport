import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';
import { GoalReport } from '../model/goal-report.model';
import { throwError } from '../../../../node_modules/rxjs/internal/observable/throwError';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getGoalReportData(fromDate: string) {
    return this.http.get<GoalReport>('http://webservicesdev:1025/GetGoalCountFromDate/' + fromDate)
    .pipe(
      retry(3), // retry failed request up to 3 times
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
