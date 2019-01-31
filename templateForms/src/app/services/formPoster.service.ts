import { Injectable} from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormPosterService {

    name: String = 'abc';

    constructor(private _httpclient: HttpClient) {}

    postEmployee(employee: Employee): Observable<any> {
        console.log('coming in service', employee);
        return this._httpclient.post('http://localhost:3100/postEmployee', employee);
    }

    deleteEmployee(employee: Employee): Observable<any> {
        console.log('coming in service', employee);
        return this._httpclient.delete('http://localhost:3100/postEmployee', name);
    }
}



/*****************Angular<7**********
 *
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee.model';


@Injectable()

export class FormPosterService {
    constructor( private http: Http) {}

    private extractData(res: Response) {
        const outres = res.json();
        return outres.fields || { };
    }
    postEmployee(employee: Employee): Observable <any> {
        // console.log('posting Data in service', employee);
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:3100/postEmployee', body, options)
            .pipe(map(this.extractData));
    }
}
 */
