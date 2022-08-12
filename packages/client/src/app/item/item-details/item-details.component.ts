import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Route } from '@angular/router'
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
  itemDetails: IRowDetails[] = []
  statusDetails: IRowDetails[] = []
  itemId: string
  URL: string = `${environment.baseURL}/item`

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || ''
    if (this.itemId) {
      this.itemService.getItemDetails(this.itemId).subscribe((response) => {
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
            key: 'Created at',
            value: new Date(response.data.item.createdAt).toDateString()
          },
          {
            key: 'Availability',
            value: !response.data.status?.employeeId ? 'Yes' : 'No'
          }
        ]
        if (response.data.status) {
          this.statusDetails = [
            {
              key: 'Employee name',
              value: response.data.status.employeeName
            },
            {
              key: 'Received date',
              value: new Date(response.data.status.receivedDate).toDateString()
            },
            {
              key: 'Returned date',
              value: new Date(response.data.status.returnedDate).toDateString()
            }
          ]
        }
        // return this.rows
      })
    }
  }
}
