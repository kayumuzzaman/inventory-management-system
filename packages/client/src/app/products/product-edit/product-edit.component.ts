import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
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
  form: FormGroup

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')

    if (this.productId) {
      this.productService
        .getProductDetails(this.productId)
        .subscribe((response) => {
          const product = response.data
          this.form.patchValue(product)
        })
    }
    this.form = new FormGroup({
      productName: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      model: new FormControl(null)
    })
  }

  toggleModal() {
    this.showModal = !this.showModal
    this.showModalEvent.emit(this.showModal)
  }

  onSubmit() {
    const productName = this.form.value.productName
    const model = this.form.value.model
    const type = this.form.value.type
    const currentUrl = this.router.url
    const product: Product = {
      productName: productName,
      model: model,
      type: type
    }

    if (!this.editMode) {
      this.productService.createProduct(product)
    } else {
      if (this.productId) {
        this.productService.updateProduct(this.productId, product)
      } else {
        throw new Error('productId is not available')
      }
    }

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl])
    })

    this.toggleModal()
  }
}
