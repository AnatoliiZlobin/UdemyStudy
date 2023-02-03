import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import { IProduct } from '../models/products'
import {catchError, delay, Observable, throwError} from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams().append('limit', 5)
        }).pipe(
            delay(2000),
            catchError(this.errorHandler)
        )
    }

    private errorHandler(error: HttpErrorResponse) {
        return throwError(() => error.message)
    }
    
}