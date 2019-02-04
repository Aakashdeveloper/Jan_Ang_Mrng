import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
            firstName: ['', [Validators.required, Validators.minLength(3)] ],
            lastName: [''],
            email: ['']
        });
    }

    save(): void {
        console.log(this.employeeForm);
    }

    populateData(): void {
        this.employeeForm.patchValue({
            email: 'a@a.com'
        });
    }
}


/*

populateData(): void {
        this.employeeForm.setValue({
            firstName: 'John',
            lastName: 'andy',
            email: 'a@a.com'
        });
    }
*/
