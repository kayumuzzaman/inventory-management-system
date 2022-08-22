import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Status } from '../status.model'
import { StatusService } from '../status.service'

@Component({
  selector: 'app-status-edit',
  templateUrl: './status-edit.component.html',
  styleUrls: ['./status-edit.component.css']
})
export class StatusEditComponent implements OnInit {
  @Input() showModal!: boolean
  @Output() showModalEvent: EventEmitter<boolean> = new EventEmitter()
  @Input() editMode!: boolean
  @Input() productId: string

  itemId: string

  form: FormGroup
  constructor(
    private statusService: StatusService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('itemId') || ''

    this.form = new FormGroup({
      employeeName: new FormControl(null, Validators.required),
      employeeId: new FormControl(null, Validators.required),
      receivedDate: new FormControl(null, Validators.required),
      returnedDate: new FormControl(null, Validators.required),
      description: new FormControl(null)
    })
  }

  toggleModal() {
    this.showModal = !this.showModal
    this.showModalEvent.emit(this.showModal)
  }

  onSubmit() {
    const itemId = this.itemId
    const productId = this.productId
    const employeeName = this.form.value.employeeName
    const employeeId = this.form.value.employeeId
    const receivedDate = this.form.value.receivedDate
    const returnedDate = this.form.value.returnedDate
    const description = this.form.value.description
    const currentUrl = this.router.url
    const status: Status = {
      itemId,
      productId,
      employeeName,
      employeeId,
      receivedDate,
      returnedDate,
      description
    }

    if (!this.editMode) {
      this.statusService.createStatus(status)
    } else {
      if (this.itemId) {
        this.statusService.updateStatus(status, itemId)
      } else {
        throw new Error('itemId is not available')
      }
    }

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl])
    })

    this.toggleModal()
  }
}
