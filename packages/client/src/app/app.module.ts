import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ProductsComponent } from './products/products.component'
import { ProductListComponent } from './products/product-list/product-list.component'
import { ProductItemComponent } from './products/product-list/product-item/product-item.component'
import { ProductDetailsComponent } from './products/product-details/product-details.component'
import { NgxPaginationModule } from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http'
import { ItemHistoryListComponent } from './item-history-list/item-history-list.component'
import { ItemHistoryComponent } from './item-history-list/item-history/item-history.component'
import { DetailsTableComponent } from './component/table/details-table.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ItemHistoryListComponent,
    ItemHistoryComponent,
    DetailsTableComponent
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
