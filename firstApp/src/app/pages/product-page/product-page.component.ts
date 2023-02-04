import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{
  title = 'firstApp';
  loading = false
  term =''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
    ){
  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(() => {
      this.loading = false 
    })
  }
}
