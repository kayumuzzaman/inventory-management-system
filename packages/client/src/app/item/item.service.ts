import { Injectable } from '@angular/core'
import { of, switchMap } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { environment } from 'src/environments/environment'

export enum SearchBy {
  PRODUCT_ID = 'product-id',
  PRODUCT_NAME = 'product-name',
  EMPLOYEE_ID = 'employee-id',
  TYPE = 'type'
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() {}

  getItemDetails(id: string) {
    return fromFetch(`${environment.baseURL}/item/${id}`).pipe(
      switchMap((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return of({ error: true })
        }
      })
    )
  }

  getItemsBySearch(searchBy: SearchBy, id: string) {
    return fromFetch(`${environment.baseURL}/item/${searchBy}/${id}`).pipe(
      switchMap((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return of({ error: true })
        }
      })
    )
  }
}
