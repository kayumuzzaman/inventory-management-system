/* eslint-disable*/

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../product.service'

interface Details {
  productName: string
  inStock: number
  quantity: number
  type: string
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  details: Details
  productId: string | null
  constructor(private service: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')
    if (this.productId) {
      this.service.getProductDetails(this.productId).subscribe((response) => {
        this.details = response
        console.log(response)
      })
    }
  }
}
