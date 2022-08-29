/* global localStorage */
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Inventory Management System'

  constructor(private jwtHelper: JwtHelperService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token')

    if (token) {
      if (this.jwtHelper.isTokenExpired(token)) {
        localStorage.removeItem('token')
        localStorage.removeItem('scope')
      }
    } else {
      this.router.navigate(['/login'])
    }
  }
}
