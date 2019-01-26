import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';
import { ProductComponent } from './product/product.component';
import { MyPipe } from './product/myUpper.pipe';
import { DiscountedPipe } from './product/discount.pipe';
import { ProductSearch } from './product/productSearch.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './product/product.service';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { ProdDetailComponent } from './product/product_detail.component';
import { NotFoundComponent } from './shared/notfound.Component';
import { ProductModule } from './product/product.module';

@NgModule({
    // All the components & Pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyPipe,
        DiscountedPipe,
        ProductSearch,
        StarComponent,
        OrderComponent,
        HomeComponent,
        ProdDetailComponent,
        NotFoundComponent
    ],

    // All Module
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProdDetailComponent},
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent},
        ]),
        ProductModule

    ],

    // Only first component
    bootstrap: [
        AppComponent
    ],

    // All the services
    providers: [
        ProductService
    ]
})

export class AppModule {

}
