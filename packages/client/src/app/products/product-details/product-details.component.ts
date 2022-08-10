import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IRowDetails } from 'src/app/component/details-table/details-table.component'
import { environment } from 'src/environments/environment'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  title: string = 'Product Details'
  sectionTitle: string = 'Item list of this product'
  rows: IRowDetails[] = []
  productId: string | null
  URL: string = `${environment.baseURL}/products`
  showModal: boolean = false

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

  setModal(event: boolean) {
    this.showModal = event
  }

  onUpdate = () => {
    this.showModal = !this.showModal
  }
}
