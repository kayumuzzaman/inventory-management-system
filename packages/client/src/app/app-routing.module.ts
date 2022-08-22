import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ItemDetailsComponent } from './item/item-details/item-details.component'
import { ItemListComponent } from './item/item-list/item-list.component'
import { ProductDetailsComponent } from './products/product-details/product-details.component'
import { ProductListComponent } from './products/product-list/product-list.component'

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent },
  { path: 'items/details/:itemId', component: ItemDetailsComponent },
  { path: 'search/:category/:searchText', component: ItemListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
