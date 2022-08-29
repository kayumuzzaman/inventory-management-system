import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Item } from '../item.model'
import { ItemService } from '../item.service'

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  @Input() showModal!: boolean
  @Output() showModalEvent: EventEmitter<boolean> = new EventEmitter()
  @Input() editMode!: boolean
  @Input() productId: string
  @Input() onUpdate: () => void

  itemId!: string | null

  form: FormGroup
  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('itemId')

    if (this.itemId && this.editMode) {
      this.itemService
        .getItemDetails(this.itemId)
        .subscribe((response: any) => {
          const item = response.data.item
          this.form.patchValue(item)
        })
    }
    this.form = new FormGroup({
      itemName: new FormControl(null, Validators.required),
      serialNo: new FormControl(null, Validators.required),
      description: new FormControl(null)
    })
  }

  toggleModal() {
    this.showModal = !this.showModal
    this.showModalEvent.emit(this.showModal)
  }

  onSubmit() {
    const productId = this.productId
    const itemName = this.form.value.itemName
    const serialNo = this.form.value.serialNo
    const description = this.form.value.description
    const currentUrl = this.router.url
    const item: Item = { productId, itemName, serialNo, description }

    if (!this.editMode) {
      this.itemService.createItem(item)
    } else {
      if (this.itemId) {
        this.itemService.updateItem(this.itemId, item)
      } else {
        throw new Error('itemId is not available')
      }
    }

    this.onUpdate()

    this.toggleModal()
  }
}
