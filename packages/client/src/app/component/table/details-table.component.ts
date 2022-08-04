import { Component, Input, OnInit } from '@angular/core'

export interface Row {
  key: string
  value?: string
}

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {
  @Input() rows: Row[]
  @Input() title: string
  @Input() createURL?: string
  @Input() updateURL?: string
  @Input() deleteURL?: string

  constructor() {}

  ngOnInit(): void {}
}
