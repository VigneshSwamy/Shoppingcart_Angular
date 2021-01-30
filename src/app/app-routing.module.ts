import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


const routes: Routes = [
  { path: "", redirectTo: "/product-list", pathMatch: "full" },
  { path: "product-list", component: ProductListComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "product-detail/:id", component: ProductdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
