import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    // All the components & Pipe
    declarations: [
        AppComponent
    ],

    // All Module
    imports: [
        BrowserModule
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
