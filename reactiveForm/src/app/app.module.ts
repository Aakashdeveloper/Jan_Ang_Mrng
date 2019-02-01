import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent} from './app.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
    declarations: [
        AppComponent,
        FormsComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})

export class AppModule {

}
