import { Component, OnInit } from '@angular/core'
import { Product } from '../product.model'
import { ProductService } from '../product.service'
/* eslint-disable */

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Product[]
  page: number = 1
  count: number = 0
  tableSize: number = 10

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response?.data
    })
  }
}
