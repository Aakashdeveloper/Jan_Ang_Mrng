import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.Component';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    // All the components & Pipe
    declarations: [
        AppComponent,
        BookComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent
    ],

    // All Module
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ProductModule
    ],

    // Only first component
    bootstrap: [
        AppComponent
    ],

    // All the services
    providers: []
})

export class AppModule {

}
