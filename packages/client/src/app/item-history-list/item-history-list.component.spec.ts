/* eslint-disable no-undef */

import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ItemHistoryListComponent } from './item-history-list.component'

describe('ItemHistoryListComponent', () => {
  let component: ItemHistoryListComponent
  let fixture: ComponentFixture<ItemHistoryListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemHistoryListComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ItemHistoryListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
