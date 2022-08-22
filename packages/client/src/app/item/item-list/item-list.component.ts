import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
  Alignment,
  IColumn,
  IRowContent,
  IRows
} from 'src/app/component/list-table/list-table.component'
import { ItemService, SearchBy } from '../item.service'

export interface IItemData {
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
  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input() searchBy?: string
  @Input() searchText?: string

  categoryFromURL: string
  searchTextFromURL: string

  page: number = 1
  count: number = 0
  tableSize: number = 10
  title: string
  showModal: boolean = false

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
      width: 30,
      alignment: Alignment.LEFT
    },
    {
      key: 'createdAt',
      label: 'Stock In',
      width: 30,
      alignment: Alignment.LEFT
    }
  ]

  onClick = (id: string) => {
    this.router.navigate([`/items/details/${id}`])
  }

  onCreateButtonClick = () => {
    this.showModal = !this.showModal
  }

  rows: IRows = {
    onClick: this.onClick,
    content: []
  }

  setModal(event: boolean) {
    this.showModal = event
  }

  getRows = (rows: IItemData[]) => {
    let rowValues: IRowContent[] = []
    rows.forEach((row) => {
      const entry = {
        id: row._id,
        itemName: row.itemName,
        productName: row.productName,
        createdAt: new Date(row.createdAt).toDateString(),
        isAvailable: row.isAvailable ? 'YES' : 'NO'
      }
      rowValues.push(entry)
    })
    return rowValues
  }

  ngOnInit(): void {
    this.categoryFromURL = this.route.snapshot.paramMap.get('category') || ''
    this.searchTextFromURL =
      this.route.snapshot.paramMap.get('searchText') || ''
    if (this.searchBy && this.searchText) {
      this.title = 'Items of this product'
      this.itemService
        .getItemsBySearch(this.searchBy, this.searchText)
        .subscribe((response) => {
          this.rows = { ...this.rows, content: this.getRows(response?.data) }
        })
    } else if (this.categoryFromURL && this.searchTextFromURL) {
      if (this.categoryFromURL === SearchBy.EMPLOYEE_ID) {
        this.title = 'Items of this employee'
      } else if (this.categoryFromURL === SearchBy.ITEM_NAME) {
        this.title = 'Items with this name'
      } else if (this.categoryFromURL === SearchBy.SERIAL_NO) {
        this.title = 'Item of this serial number'
      }
      this.itemService
        .getItemsBySearch(this.categoryFromURL, this.searchTextFromURL)
        .subscribe((response) => {
          this.rows = { ...this.rows, content: this.getRows(response?.data) }
        })
    }
  }
}
