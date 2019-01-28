import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
    selector: 'app-form',
    templateUrl: './customerForm.component.html'
})

export class CustomerFormComponent {
    languages: any[] = ['AngularJs', 'ReactJS', 'NodeJS', 'Python'];

    model = new Employee('John', '', '', '', true, '', '');

}
