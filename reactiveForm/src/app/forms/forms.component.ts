import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Employee } from './form.model';

@Component({
    selector: 'app-form',
    templateUrl: './forms.component.html'
})

export class FormsComponent implements OnInit {

    employeeForm: FormGroup;
    // employee: Employee = new Employee();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.employeeForm = this.fb.group({
            firstName: ['John'],
            lastName: ['Andy']
        });
    }

    save(): void {
        console.log(this.employeeForm);
    }
}
