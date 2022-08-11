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
  title: string = 'Item Details'
  rows: IRowDetails[] = []
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
        this.rows = [
          {
            key: 'Item name',
            value: response.data.itemName
          },
          {
            key: 'Product',
            value: response.data.productName
          },
          {
            key: 'Created at',
            value: response.data.createdAt
          },
          {
            key: 'Availability',
            value: response.data.isAvailable ? 'Yes' : 'No'
          }
        ]
        return this.rows
      })
    }
  }
}
