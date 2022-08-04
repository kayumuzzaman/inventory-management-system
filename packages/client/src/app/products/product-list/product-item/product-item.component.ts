import { Component, Input, OnInit } from '@angular/core'
import { Product } from '../../product.model'

/* eslint-disable */

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: Product

  @Input()
  index!: number

  constructor() {}

  ngOnInit(): void {}
}
