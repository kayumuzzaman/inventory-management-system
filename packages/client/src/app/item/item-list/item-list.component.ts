import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import {
  Alignment,
  IColumn,
  IRowContent,
  IRows
} from 'src/app/component/list-table/list-table.component'
import { ItemService, SearchBy } from '../item.service'

interface IItemData {
  _id: string
  productId: string
  productName: string
  itemName: string
  isAvailable: true
  description: string
  inStock: number
  quantity: number
  updatedAt: Date
  createdAt: Date
  type: string
  __v: number
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  constructor(private itemService: ItemService, private router: Router) {}

  @Input() searchBy: SearchBy
  @Input() id: string

  page: number = 1
  count: number = 0
  tableSize: number = 10
  title: string = 'Items of this product'

  columns: IColumn[] = [
    {
      key: 'itemName',
      label: 'Item name',
      width: 40,
      alignment: Alignment.LEFT
    },
    {
      key: 'productName',
      label: 'Product',
      width: 20,
      alignment: Alignment.LEFT
    },
    {
      key: 'createdAt',
      label: 'Stock In',
      width: 20,
      alignment: Alignment.LEFT
    },
    {
      key: 'isAvailable',
      label: 'Is available',
      width: 20,
      alignment: Alignment.RIGHT
    }
  ]

  onClick = (id: string) => {
    this.router.navigate([`/items/details/${id}`])
  }

  rows: IRows = {
    onClick: this.onClick,
    content: []
  }

  getRows = (rows: IItemData[]) => {
    let rowValues: IRowContent[] = []
    rows.forEach((row) => {
      const entry = {
        id: row._id,
        itemName: row.itemName,
        productName: row.productName,
        createdAt: new Date(row.createdAt).toDateString(),
        isAvailable: row.isAvailable
      }
      rowValues.push(entry)
    })
    return rowValues
  }

  ngOnInit(): void {
    this.itemService
      .getItemsBySearch(this.searchBy, this.id)
      .subscribe((response) => {
        this.rows = { ...this.rows, content: this.getRows(response?.data) }
      })
  }
}
