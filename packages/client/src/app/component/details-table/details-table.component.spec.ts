/* eslint-disable */

import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DetailsTableComponent } from './details-table.component'

describe('DetailsTableComponent', () => {
  let component: DetailsTableComponent
  let fixture: ComponentFixture<DetailsTableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsTableComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(DetailsTableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
