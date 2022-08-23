import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false
    }
  }

  CATAGORY = {
    ItemName: 'item-name',
    EmployeeID: 'employee-id',
    SerialNo: 'serial-no'
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      category: new FormControl(null, Validators.required),
      searchText: new FormControl(null, Validators.required)
    })
  }

  onSearch = () => {
    this.router.navigate([
      `search/${this.searchForm.value.category}/${this.searchForm.value.searchText}`
    ])
  }
}
