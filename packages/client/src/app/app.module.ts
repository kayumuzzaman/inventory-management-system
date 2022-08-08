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
import { ItemHistoryListComponent } from './item-history-list/item-history-list.component'
import { ItemHistoryComponent } from './item-history-list/item-history/item-history.component'
import { DetailsTableComponent } from './component/details-table/details-table.component'
import { ListTableComponent } from './component/list-table/list-table.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ItemHistoryListComponent,
    ItemHistoryComponent,
    DetailsTableComponent,
    ListTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
