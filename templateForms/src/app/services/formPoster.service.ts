import { Injectable} from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable()

export class FormPosterService {

    postEmployee(employee: Employee): Observable<any>{
        console.log('coming in service', employee);
    }
}
