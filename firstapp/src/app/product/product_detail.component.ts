import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product.model';

@Component({
    templateUrl: './product_detail.component.html'
})

export class ProdDetailComponent implements OnInit {
    id: number;
    details: IProduct[];

    constructor(private _route: ActivatedRoute ,
                private _prodServ: ProductService,
                private _router: Router) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
       this._prodServ.getProductDetail(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this._router.navigate(['products']);
    }
}



/*
name: string;
    description: string;
    imgUrl: string;
    id: number;
this._route
            .queryParams
            .subscribe((data) => {
                this.name = data['pname'];
                this.description = data['desc'];
                this.imgUrl = data['imgUrl'];
            });
            */
