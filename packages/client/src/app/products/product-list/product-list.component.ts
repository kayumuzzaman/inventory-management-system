import { Component, OnInit } from '@angular/core'
import { Product } from '../product.model'
/* eslint-disable */

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Product[]

  constructor() {}

  ngOnInit(): void {
    this.products = [
      {
        name: 'test',
        inStock: 'true',
        quantity: 1100,
        model: 'Dell',
        type: 'Laptop'
      },
      {
        name: 'test',
        inStock: 'true',
        quantity: 1100,
        model: 'Dell',
        type: 'Laptop'
      }
    ]
  }
}
