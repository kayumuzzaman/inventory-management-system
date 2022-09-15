/* global localStorage */
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, of, switchMap } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { Product } from './product.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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

  getAllProducts() {
    return this.http
      .get(`${environment.baseURL}/product/`, this.httpOptions)
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
  }

  getProductDetails(id: string) {
    return this.http
      .get(`${environment.baseURL}/product/${id}`, this.httpOptions)
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
  }

  createProduct(product: Product) {
    return this.http
      .post(`${environment.baseURL}/product/add`, product, this.httpOptions)
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
  }

  updateProduct(productId: string, product: Product) {
    return this.http
      .put(
        `${environment.baseURL}/product/${productId}`,
        product,
        this.httpOptions
      )
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
  }

  deleteProduct(productId: string) {
    return this.http
      .delete(`${environment.baseURL}/product/${productId}`, this.httpOptions)
      .pipe(
        catchError((error) => {
          return of({ error: error })
        })
      )
  }
}
