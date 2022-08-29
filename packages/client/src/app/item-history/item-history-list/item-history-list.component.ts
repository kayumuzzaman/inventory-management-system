import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import {
  Alignment,
  IColumn,
  IRowContent,
  IRows
} from 'src/app/component/list-table/list-table.component'
import { ItemHistoryService } from '../item-history.service'

interface IItemHistoryData {
  _id: string
  itemId: string
  employeeName: string
  receivedDate: Date
  returnedDate: Date
  description: string
  createdAt: string
  updatedAt: string
  __v: 0
}

@Component({
  selector: 'app-item-history-list',
  templateUrl: './item-history-list.component.html',
  styleUrls: ['./item-history-list.component.css']
})
export class ItemHistoryListComponent implements OnInit {
  constructor(
    private historyService: ItemHistoryService,
    private router: Router
  ) {}

  @Input() itemId: string

  page: number = 1
  count: number = 0
  tableSize: number = 10
  title: string = 'Histroy of this items'

  columns: IColumn[] = [
    {
      key: 'employeeName',
      label: 'Employee name',
      width: 20,
      alignment: Alignment.LEFT
    },
    {
      key: 'receivedDate',
      label: 'Received date',
      width: 20,
      alignment: Alignment.LEFT
    },
    {
      key: 'returnedDate',
      label: 'Returned date',
      width: 20,
      alignment: Alignment.LEFT
    },
    {
      key: 'description',
      label: 'Description',
      width: 40,
      alignment: Alignment.RIGHT
    }
  ]

  onClick = (id: string) => {
    this.router.navigate([`/items/details/${id}`])
  }

  rows: IRows = {}

  getRows = (rows: IItemHistoryData[]) => {
    let rowValues: IRowContent[] = []
    rows.forEach((row) => {
      const entry = {
        id: row._id,
        employeeName: row.employeeName,
        receivedDate: new Date(row.receivedDate).toDateString(),
        returnedDate: new Date(row.returnedDate).toDateString(),
        description: row.description
      }
      rowValues.push(entry)
    })
    return rowValues
  }

  ngOnInit(): void {
    this.historyService
      .getHistoryList(this.itemId)
      .subscribe((response: any) => {
        this.rows = { ...this.rows, content: this.getRows(response?.data) }
      })
  }
}
