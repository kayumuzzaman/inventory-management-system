import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, of, switchMap } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // have to replace this with real API
  dummyAPI = 'https://jsonplaceholder.typicode.com/users'

  getEmployeeList = () => {
    return fromFetch(this.dummyAPI).pipe(
      switchMap((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return of({ error: true })
        }
      })
    )
  }
}
