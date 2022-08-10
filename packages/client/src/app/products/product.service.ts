import { Injectable } from '@angular/core'
import { of, switchMap } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

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
}
