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
      'Content-Type': 'application/json'
    })
  }

  getAllProducts() {
    return fromFetch(`${environment.baseURL}/product/`).pipe(
      switchMap((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return of({ error: true })
        }
      })
    )
  }

  getProductDetails(id: string) {
    return fromFetch(`${environment.baseURL}/product/${id}`).pipe(
      switchMap((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return of({ error: true })
        }
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
      .subscribe()
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
      .subscribe()
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
