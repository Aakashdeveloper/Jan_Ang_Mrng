import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customerForm/customerForm.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        CustomerFormComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})

export class AppModule {

}
