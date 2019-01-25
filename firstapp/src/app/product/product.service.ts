import { Injectable } from '@angular/core';
import { IProduct} from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

    private _productUtl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _httpClient: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUtl);
    }

    getProductDetail(id): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(`${this._productUtl}?productId=${id}`);
    }

    /*
    getProducts(): Promise<IProduct[]> {
      return this._httpClient.get(this._productUtl)
                .toPromise()
                .then((res) => res.json());
    }
    */

}

