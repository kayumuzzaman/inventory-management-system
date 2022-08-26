import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { catchError, map, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'

interface Credentials {
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() {}

  login(credentials: Credentials) {
    return ajax({
      url: `${environment.baseURL}/auth/login`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs'
      },
      body: credentials
    }).pipe(
      catchError((error) => {
        return of(error)
      })
    )
  }
}
