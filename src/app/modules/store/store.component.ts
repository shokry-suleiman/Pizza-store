import { Component, OnInit } from '@angular/core';
import { PRODUCT } from 'src/app/@resources/models/product';
import { ProductService } from 'src/app/@resources/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products!:PRODUCT[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.listAllProducts().subscribe((res:any) =>{
    this.products = res["data"];
    } )
  }
}
