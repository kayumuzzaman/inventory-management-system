import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Product } from '../product.model'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() showModal!: boolean
  @Output() showModalEvent: EventEmitter<boolean> = new EventEmitter()
  @Input() editMode!: boolean
  @Input() productId!: string | null
  @Input() fetchProduct: () => void
  form: FormGroup

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  getProductDetailsForForm = () => {
    this.productId = this.route.snapshot.paramMap.get('id')
    if (this.productId) {
      this.productService
        .getProductDetails(this.productId)
        .subscribe((response: any) => {
          const product = response.data
          this.form.patchValue(product)
        })
    }
  }

  ngOnInit(): void {
    this.getProductDetailsForForm()

    this.form = new FormGroup({
      productName: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      model: new FormControl(null)
    })
  }

  toggleModal() {
    this.showModal = !this.showModal
    this.getProductDetailsForForm()
    this.showModalEvent.emit(this.showModal)
  }

  onSubmit() {
    const productName = this.form.value.productName
    const model = this.form.value.model
    const type = this.form.value.type
    const product: Product = {
      productName: productName,
      model: model,
      type: type
    }

    if (!this.editMode) {
      this.productService.createProduct(product).subscribe(() => {
        this.fetchProduct()
      })
    } else {
      if (this.productId) {
        this.productService
          .updateProduct(this.productId, product)
          .subscribe(() => this.fetchProduct())
      } else {
        throw new Error('productId is not available')
      }
    }

    this.form.reset()

    this.toggleModal()
  }
}
