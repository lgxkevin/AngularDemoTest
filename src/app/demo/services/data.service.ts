import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { demoData } from '../models/demoData';
import { data } from './mock-data';
import { data2 } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDemoData(): Observable<demoData[]> {
    return of(data).pipe(catchError(this.handleError<demoData[]>('getDemoData')))
  }

  getDemoData2(): Observable<demoData[]> {
    return of(data2).pipe(catchError(this.handleError<demoData[]>('getDemoData2')));
  }

  getContent(data: any, filterValue: any):string {
    var result =
      data &&
      data.filter(
        (item: any) =>
          (item.lot && item.lot.includes(filterValue)) ||
          (item.client && item.client.includes(filterValue)) ||
          (item.dbCode && item.dbCode.includes(filterValue))
      );
        
    return JSON.stringify(result);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Error logging can be sent to the monitor app at here
      return of(result as T);
    };
  }
}
