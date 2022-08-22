import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, of, switchMap } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { environment } from 'src/environments/environment'
import { Item } from './item.model'

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

  createItem = (item: Item) => {
    return this.http
      .post(`${environment.baseURL}/item/add`, item, this.httpOptions)
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
      .subscribe()
  }

  updateItem = (itemId: string, item: Item) => {
    return this.http
      .put(`${environment.baseURL}/item/${itemId}`, item, this.httpOptions)
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
      .subscribe()
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

  deleteItem(itemId: string) {
    return this.http
      .delete(`${environment.baseURL}/item/${itemId}`, this.httpOptions)
      .pipe(
        catchError((error) => {
          return of({ error: error })
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
