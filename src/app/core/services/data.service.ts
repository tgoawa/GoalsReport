import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, retry, map } from 'rxjs/operators';
import { GoalReport, OneToOneReport, SurveyDataObject, ChartObject } from '../model/goal-report.model';
import { throwError } from '../../../../node_modules/rxjs/internal/observable/throwError';
import { environment } from '../../../environments/environment';
import { TeamMember } from '../model/teamMember.model';
import { LookUps, IBusinessUnits, ILocations } from '../model/lookup.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { isNull } from 'util';

const api = environment.envApi;
@Injectable()
export class DataService {
  lookups$: Observable<LookUps>;
  businessUnits$: Observable<IBusinessUnits>;
  locations$: Observable<ILocations>;
  private _lookups: BehaviorSubject<LookUps>;

  constructor(private http: HttpClient) {
  }

  getGoalReportData(fromDate: string) {
    return this.http.get<GoalReport>(api + 'GetGoalCountFromDate/' + fromDate)
    .pipe(
      retry(3), // retry failed request up to 3 times
      catchError(this.handleError)
    );
  }

  getExpertiseNames(IsExpert: boolean) {
    return this.http.get<TeamMember[]>(api + 'GetExpertiseNames/' + IsExpert)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getLookupLists() {
      return this.http.get<LookUps>(api + 'GetLookupLists')
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getNoGoalsTeamMembers() {
    return this.http.get<TeamMember[]>(api + 'GetNoGoalsTeamMembers/')
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getOneToOneReportData(totalMonths: number) {
    return this.http.get<OneToOneReport>(api + 'GetOneToOneCounts/' + totalMonths)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getTeamMembers(chartObject: ChartObject) {
    return this.http.put<TeamMember[]>(api + 'GetTeamMembers/', chartObject)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getSurveyData() {
    return this.http.get<SurveyDataObject>(api + 'GetSurveyData')
    .pipe(
      retry(3),
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
