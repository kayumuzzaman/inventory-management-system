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

  ngOnInit(): void {
    this.url = this.router.url
    console.log('url', this.router.url, this.router)
  }
}
