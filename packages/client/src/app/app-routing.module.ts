import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ItemHistoryListComponent } from './item-history-list/item-history-list.component'
import { ProductDetailsComponent } from './products/product-details/product-details.component'
import { ProductListComponent } from './products/product-list/product-list.component'

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent },
  { path: 'item-history', component: ItemHistoryListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
