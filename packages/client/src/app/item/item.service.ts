import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, of, switchMap } from 'rxjs'
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
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

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

  deleteItemsByProductId(productId: string) {
    return this.http
      .delete(
        `${environment.baseURL}/item/product/${productId}`,
        this.httpOptions
      )
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
  }
}
