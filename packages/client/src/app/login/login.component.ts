import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from './login.service'
import * as moment from 'moment'
import jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  loginForm: FormGroup
  error: string
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  setResponse = (res: any) => {
    if (res.status === 400) {
      this.error = res.response.message
    } else {
      const token = res.response.token
      const info: any = jwt_decode(token)
      const scope = info.userType

      /* eslint-disable no-undef */
      localStorage.setItem('token', token)
      localStorage.setItem('scope', scope)

      this.router.navigate(['/'])
    }
  }

  onLogin = () => {
    try {
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      this.loginService.login({ email, password }).subscribe({
        next: (value: any) => this.setResponse(value),
        error: (err: any) => console.log(err)
      })
    } catch (error: any) {
      this.error = error.error.message
    }
  }
}

/*
2280831003
*/
