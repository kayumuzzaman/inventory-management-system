import { Injectable } from '@angular/core'
import { of, switchMap } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ItemHistoryService {
  constructor() {}

  getHistoryList(id: string) {
    return fromFetch(`${environment.baseURL}/item-status-history/${id}`).pipe(
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
