import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: './product_detail.component.html'
})

export class ProdDetailComponent implements OnInit {
    name: string;
    description: string;
    imgUrl: string;


    constructor(private _route: ActivatedRoute ) {}

    ngOnInit(): void {
        this._route
            .queryParams
            .subscribe((data) => {
                this.name = data['pname'];
                this.description = data['desc'];
                this.imgUrl = data['imgUrl'];
            });
    }
}
