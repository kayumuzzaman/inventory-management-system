import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  loginForm: FormGroup
  error: string
  token: string
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  setResponse = (res: any) => {
    if (res.status === 400) {
      this.error = res.response.message
    } else if (res.status === 200) {
      this.token = res.response.token
      this.error = ''
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
