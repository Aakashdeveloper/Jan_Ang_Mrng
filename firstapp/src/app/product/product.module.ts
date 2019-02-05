import { NgModule} from '@angular/core';

import { ProductComponent } from './product.component';
import { MyPipe } from './myUpper.pipe';
import { DiscountedPipe } from './discount.pipe';
import { ProdDetailComponent } from './product_detail.component';
import { ProductSearch } from './productSearch.pipe';
import { ProductService } from './product.service';
import { SharedModuel } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        AppRoutingModule,
        SharedModuel
    ],
    declarations: [
        ProductComponent,
        MyPipe,
        DiscountedPipe,
        ProductSearch,
        ProdDetailComponent
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}
