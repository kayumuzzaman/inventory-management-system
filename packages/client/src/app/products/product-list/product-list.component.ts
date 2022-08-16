/* eslint-disable */

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import {
  Alignment,
  IColumn,
  IRowContent,
  IRows
} from 'src/app/component/list-table/list-table.component'
import { Product } from '../product.model'
import { ProductService } from '../product.service'

interface IProductData {
  _id: string
  productName: string
  inStock: number
  quantity: number
  type: string
  model: string
  __v: number
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  page: number = 1
  count: number = 0
  tableSize: number = 10
  showModal: boolean = false
  title: string = 'All products'
  columns: IColumn[] = [
    {
      key: 'name',
      label: 'Product name',
      width: 40,
      alignment: Alignment.LEFT
    },
    {
      key: 'type',
      label: 'Type',
      width: 30,
      alignment: Alignment.LEFT
    },
    {
      key: 'model',
      label: 'Model',
      width: 30,
      alignment: Alignment.LEFT
    }
  ]

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.rows = { ...this.rows, content: this.getRows(response?.data) }
    })
  }

  onClick = (id: string) => {
    this.router.navigate([`/products/details/${id}`])
  }

  onCreateButtonClick = () => {
    this.showModal = !this.showModal
  }

  rows: IRows = {
    onClick: this.onClick,
    content: []
  }

  getRows = (rows: IProductData[]) => {
    let rowValues: IRowContent[] = []
    rows.forEach((row) => {
      const entry = {
        id: row._id,
        name: row.productName,
        type: row.type,
        model: row.model
      }
      rowValues.push(entry)
    })
    return rowValues
  }

  setModal(event: boolean) {
    this.showModal = event
  }
}
