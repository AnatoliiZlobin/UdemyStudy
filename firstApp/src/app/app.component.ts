import { Component, OnInit } from '@angular/core';
import { products } from './data/products';
import { IProduct } from './models/products';
import { ProductsService } from './services/products.service';
/*import { products as data } from './data/products';*/
import { Observable, tap } from 'rxjs'
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'firstApp';

  /*products: IProduct[] = data */
  loading = false
  products$: Observable<IProduct[]>
  term =''

  constructor(
    private productsService: ProductsService,
    public modalService: ModalService
    ){
  }

  ngOnInit(): void {
    this.loading = true
    /*this.productsService.getAll().subscribe( products => {
      this.products = products
      this.loading = false
    })*/
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
  }
}
