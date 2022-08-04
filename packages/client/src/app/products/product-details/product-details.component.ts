/* eslint-disable*/

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from '../product.model'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  details: Product
  productId: string | null
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')
    if (this.productId) {
      this.productService
        .getProductDetails(this.productId)
        .subscribe((response) => {
          this.details = response.data
          console.log(response)
          return this.details
        })
    }
  }
}
