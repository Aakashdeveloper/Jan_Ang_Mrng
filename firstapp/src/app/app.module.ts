import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';
import { ProductComponent } from './product/product.component';

@NgModule({
    // All the components & Pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent
    ],

    // All Module
    imports: [
        BrowserModule,
        FormsModule
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
