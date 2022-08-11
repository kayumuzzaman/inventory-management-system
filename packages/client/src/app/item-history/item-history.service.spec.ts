import { TestBed } from '@angular/core/testing'

import { ItemHistoryService } from './item-history.service'

describe('ItemHistoryService', () => {
  let service: ItemHistoryService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ItemHistoryService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
