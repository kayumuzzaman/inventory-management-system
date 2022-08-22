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
      'Content-Type': 'application/json'
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
      .subscribe()
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
      .subscribe()
  }
}
