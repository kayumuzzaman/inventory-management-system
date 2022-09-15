/* global localStorage */

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, of } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Item } from './item.model'

export enum SearchBy {
  PRODUCT_ID = 'product-id',
  ITEM_NAME = 'item-name',
  EMPLOYEE_ID = 'employee-id',
  SERIAL_NO = 'serial-no'
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token') || '',
      'Cache-Control':
        'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      Pragma: 'no-cache',
      Expires: '0'
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
    return this.http
      .get(`${environment.baseURL}/item/${id}`, this.httpOptions)
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
  }

  getItemsBySearch(searchBy: string, searchText: string) {
    return this.http
      .get(
        `${environment.baseURL}/item/${searchBy}/${searchText}`,
        this.httpOptions
      )
      .pipe(
        catchError((error) => {
          return of({ error: error })
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
