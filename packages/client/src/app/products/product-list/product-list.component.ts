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
  __v: number
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  products!: Product[]
  page: number = 1
  count: number = 0
  tableSize: number = 10
  title: string = 'product list'
  columns: IColumn[] = [
    {
      key: 'name',
      label: 'Product name',
      width: 6,
      alignment: Alignment.LEFT
    },
    {
      key: 'type',
      label: 'Type',
      width: 2,
      alignment: Alignment.LEFT
    },
    {
      key: 'quantity',
      label: 'Quantity',
      width: 2,
      alignment: Alignment.LEFT
    },
    {
      key: 'inStock',
      label: 'In stock',
      width: 2,
      alignment: Alignment.RIGHT
    }
  ]

  onClick = (id: string) => {
    this.router.navigate([`/products/details/${id}`])
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
        quantity: row.quantity,
        inStock: row.inStock
      }
      rowValues.push(entry)
    })
    return rowValues
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response?.data

      this.rows = { ...this.rows, content: this.getRows(response?.data) }
    })
  }
}
