/* global localStorage */
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen = false
  url: string = ''

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('scope')
    this.router.navigate(['/login'])
  }
}
