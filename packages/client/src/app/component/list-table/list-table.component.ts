import { Component, Input, OnInit } from '@angular/core'

export interface IColumn {
  key: string
  label: string
  width: number
  alignment: Alignment
}

export interface IRowContent {
  [key: string]: string | number | boolean | Date
}

export interface IRows {
  onClick?: (id: string) => void
  content?: IRowContent[]
}

export enum Alignment {
  RIGHT = 'right',
  LEFT = 'left'
}

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
  @Input() columns: IColumn[]
  @Input() rows: IRows
  @Input() title: string
  @Input() page?: number
  @Input() count?: number
  @Input() tableSize?: number
  @Input() onButtonClick?: () => void

  Alignment = Alignment
  constructor() {}

  ngOnInit(): void {}

  getWidth = (width: number) => {
    return { width: `${width}%` }
  }
}
