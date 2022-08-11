import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IRowDetails } from 'src/app/component/details-table/details-table.component'
import { SearchBy } from 'src/app/item/item.service'
import { environment } from 'src/environments/environment'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  title: string = 'Product Details'
  rows: IRowDetails[] = []
  productId: string
  URL: string = `${environment.baseURL}/products`
  searchBy: SearchBy = SearchBy.PRODUCT_ID

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || ''
    if (this.productId) {
      this.productService
        .getProductDetails(this.productId)
        .subscribe((response) => {
          this.rows = [
            {
              key: 'Product name',
              value: response.data.productName
            },
            {
              key: 'Type',
              value: response.data.type
            },
            {
              key: 'Model',
              value: response.data.model
            },
            {
              key: 'Quantity',
              value: response.data.quantity
            },
            {
              key: 'Available',
              value: response.data.inStock
            }
          ]
          return this.rows
        })
    }
  }
}
