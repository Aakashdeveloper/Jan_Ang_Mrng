import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm} from '@angular/forms';
import { FormPosterService } from '../services/formPoster.service';

@Component({
    selector: 'app-form',
    templateUrl: './customerForm.component.html'
})

export class CustomerFormComponent {
    languages: any[] = ['AngularJs', 'ReactJS', 'NodeJS', 'Python'];
    hasCodeLangError: Boolean = false;

    constructor(private _FormPosterService: FormPosterService) {}

    model = new Employee('John', 'Andy', 'a@a.com', '12345678', true, 'male', 'AngularJs');

    validateCodeLang(event): void {
        if (this.model.codelang === 'default') {
            this.hasCodeLangError = true;
        } else {
            this.hasCodeLangError = false;
        }
    }

    formSubmit(form: NgForm): void {
        console.log(form.value);
        this._FormPosterService.postEmployee(form.value)
            .subscribe((res) => console.log('posted sucess', res));
    }

}
