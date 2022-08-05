import { Injectable } from '@angular/core'
import { of, switchMap } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

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
}
