/* global localStorage */

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, of } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Status } from './status.model'

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token') || '',
      'Cache-Control':
        'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      Pragma: 'no-cache',
      Expires: '0'
    })
  }

  createStatus = (status: Status) => {
    return this.http
      .post(`${environment.baseURL}/item-status/add`, status, this.httpOptions)
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
  }

  updateStatus = (status: Status, itemId: string) => {
    status
    return this.http
      .put(
        `${environment.baseURL}/item-status/${itemId}`,
        status,
        this.httpOptions
      )
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
  }
}
