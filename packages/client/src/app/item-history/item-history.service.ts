/* global localStorage */

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, of } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ItemHistoryService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token') || ''
    })
  }

  getHistoryList(id: string) {
    return this.http
      .get(`${environment.baseURL}/item-status-history/${id}`, this.httpOptions)
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
  }
}
