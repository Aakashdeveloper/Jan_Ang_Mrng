import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';

import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
    ],
    exports: [
        FormsModule,
        CommonModule,
        StarComponent
    ]
})

export  class SharedModuel {

}
