/* global localStorage */

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { IRowDetails } from 'src/app/component/details-table/details-table.component'
import { environment } from 'src/environments/environment'
import { ItemService } from '../item.service'

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  detailsTitle: string = 'Item details'
  statusTitle: string = 'Item status'
  productId: string
  itemDetails: IRowDetails[] = []
  statusDetails: IRowDetails[] = []
  itemId: string
  URL: string = `${environment.baseURL}/item`
  showDetailsModal: boolean = false
  showStatusModal: boolean = false
  statusEditMode: boolean = false
  statusUpdated: number = 0
  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getItemDetails = () => {
    this.itemId = this.route.snapshot.paramMap.get('itemId') || ''
    if (this.itemId) {
      this.itemService
        .getItemDetails(this.itemId)
        .subscribe((response: any) => {
          this.productId = response.data.item.productId
          this.itemDetails = [
            {
              key: 'Item name',
              value: response.data.item.itemName
            },
            {
              key: 'Product',
              value: response.data.item.productName
            },
            {
              key: 'Serial number',
              value: response.data.item.serialNo
            },
            {
              key: 'Created at',
              value: new Date(response.data.item.createdAt).toDateString()
            },
            {
              key: 'Details',
              value: response.data.item.description
            },
            {
              key: 'Availability',
              value: !response.data.status?.employeeId ? 'Yes' : 'No'
            }
          ]
          if (response.data.status) {
            this.statusEditMode = true
            this.statusDetails = [
              {
                key: 'Employee name',
                value: response.data.status.employeeName
              }
            ]
            if (response.data.status.employeeName) {
              this.statusDetails = [
                ...this.statusDetails,
                {
                  key: 'Received date',
                  value: new Date(
                    response.data.status.receivedDate
                  ).toDateString()
                },
                {
                  key: 'Returned date',
                  value: new Date(
                    response.data.status.returnedDate
                  ).toDateString()
                },
                {
                  key: 'Description',
                  value: response.data.status.description
                }
              ]
            }
          }
        })
    }
  }

  ngOnInit(): void {
    this.getItemDetails()
  }

  setDetailsModal(event: boolean) {
    this.showDetailsModal = event
  }

  setStatusModal(event: boolean) {
    this.showStatusModal = event
  }

  onDetailsUpdate = () => {
    this.showDetailsModal = !this.showDetailsModal
  }

  onUpdateStatusModel = () => {
    this.showStatusModal = !this.showStatusModal
  }

  onDelete = () => {
    /* eslint-disable no-undef */
    if (confirm('Confirm deletion?')) {
      this.itemService.deleteItem(this.itemId).subscribe()
      this.router.navigate([`/products/details/${this.productId}`])
    }
  }

  onUpdateDetails = () => {
    this.getItemDetails()
  }

  onUpdateStatus = () => {
    this.statusUpdated = this.statusUpdated + 1
    this.getItemDetails()
  }
}
