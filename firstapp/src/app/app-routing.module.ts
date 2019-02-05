import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.Component';
import { ProductComponent } from './product/product.component';
import { ProdDetailComponent } from './product/product_detail.component';

const routes: Routes = [
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            { path: 'products/:id', component: ProdDetailComponent},
            {path: 'products', component: ProductComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
