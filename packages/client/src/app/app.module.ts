import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ProductsComponent } from './products/products.component'
import { ProductListComponent } from './products/product-list/product-list.component'
import { ProductItemComponent } from './products/product-list/product-item/product-item.component'
import { ProductDetailsComponent } from './products/product-details/product-details.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent
    ProductDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
