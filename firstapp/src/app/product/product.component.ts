import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

import {IProduct} from './product.model';

@Component({
    // selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:purple}', 'h4{color:green}']
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = '*****Product List******';
    showTable: Boolean = true;
    showImage: Boolean = true;
    valueEnter: String;
    imageWidth: Number = 100;
    products: IProduct[];

    constructor(private _prodcutservie: ProductService) {}

    toggleImage(): void {
       this.showImage = !this.showImage;
    }

    onDataRecieve(message: string) {
        this.title = '~~~Product List~~~~ ' + message;
    }

    ngOnInit(): void {
       this._prodcutservie.getProducts()
            .subscribe((data) => this.products = data);
    }
}



/*
One Way Binding
--Data Binding {{}}
--Event Binding ()
--Property Binding []
Two Way Binding [()]

string
number
boolean
any[]
*/
