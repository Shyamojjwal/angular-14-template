import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app-env/environment';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBase: string;

  constructor(public http: HttpClient) {
    this.apiBase = environment.apiUrl;
  }

  //====================================================
  getFullURL = (url: string) => `${this.apiBase}${url}`;
  //====================================================
  post<T>(url: string, payload: any): Observable<T> {
    return this.http
      .post(this.getFullURL(url), payload, { observe: 'response' })
      .pipe(
        catchError((response: any) => {
          // return throwError(response.error.apiResponseMessage)
          return throwError(() => response.error);
        }),
        map((response: any) => response.body as T)
      );
  }
  //====================================================
  postFile<T>(url: string, payload: any): Observable<T> {
    return this.http
      .post(this.getFullURL(url), payload, {
        observe: 'response',
      })
      .pipe(
        catchError((response) => {
          // return throwError(response.error.apiResponseMessage)
          return throwError(() => response.error);
        }),
        map((response) => response.body as T)
      );
  }
  //====================================================
  get<T>(url: string, _params: any = null): Observable<T> {
    return this.http
      .get(`${this.getFullURL(url)}${this.setQueryParams(_params)}`, {
        observe: 'response',
      })
      .pipe(
        catchError((response) => {
          // return throwError(response.error.apiResponseMessage)
          return throwError(() => response.error);
        }),
        map((response) => response.body as T)
      );
  }
  //====================================================
  put<T>(url: string, payload: any): Observable<T> {
    return this.http
      .put(this.getFullURL(url), payload, { observe: 'response' })
      .pipe(
        catchError((response) => {
          // return throwError(response.error.apiResponseMessage)
          return throwError(() => response.error);
        }),
        map((response) => response.body as T)
      );
  }
  //====================================================

  setQueryParams = (_params: any = null) => {
    if (
      _params &&
      _params != undefined &&
      typeof _params == 'object' &&
      Object.keys(_params).length > 0
    ) {
      return (
        '?' +
        Object.keys(_params)
          .map((key) => `${key}=${_params[key]}`)
          .join('&')
      );
    } else {
      return '';
    }
  };
}
