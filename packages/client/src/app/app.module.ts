import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ProductsComponent } from './products/products.component'
import { ProductListComponent } from './products/product-list/product-list.component'
import { ProductDetailsComponent } from './products/product-details/product-details.component'
import { NgxPaginationModule } from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http'
import { DetailsTableComponent } from './component/details-table/details-table.component'
import { ListTableComponent } from './component/list-table/list-table.component'
import { ProductEditComponent } from './products/product-edit/product-edit.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ItemDetailsComponent } from './item/item-details/item-details.component'
import { ItemListComponent } from './item/item-list/item-list.component'
import { ItemHistoryListComponent } from './item-history/item-history-list/item-history-list.component'
import { ItemEditComponent } from './item/item-edit/item-edit.component'
import { ClickOutsideModule } from 'ng-click-outside'
import { StatusEditComponent } from './item-status/status-edit/status-edit.component'
import { SearchComponent } from './header/search/search.component'
import { LoginComponent } from './login/login.component'
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    DetailsTableComponent,
    ListTableComponent,
    ProductEditComponent,
    ItemDetailsComponent,
    ItemListComponent,
    ItemHistoryListComponent,
    ItemEditComponent,
    StatusEditComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    FormsModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
