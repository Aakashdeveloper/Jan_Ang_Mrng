import { Component } from '@angular/core';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    title: String = '*****Product List******';
    filter: String  = 'Filtered Result:';
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
