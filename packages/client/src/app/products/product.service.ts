import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, of, switchMap } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { Product } from './product.model'

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
    return fromFetch(`http://localhost:3000/product/`).pipe(
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
    return fromFetch(`http://localhost:3000/product/${id}`).pipe(
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
      .post(`http://localhost:3000/product/add`, product, this.httpOptions)
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
        `http://localhost:3000/product/${productId}`,
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
}
