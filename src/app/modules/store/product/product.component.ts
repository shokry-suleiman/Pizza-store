import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/@resources/services/cart.service';

@Component({
  selector: 'store-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() price:any;
  @Input() name:any;
  @Input() image:any;
  @Input() qty:any;
  @Input() code:any;
  counter:number = 0;
  constructor(private toastrService:ToastrService, private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.listCart().subscribe(data => {
      data.filter((item) =>{
        if( item?.product.code == this.code) this.counter = item.qty
      })
    })
  }
  increase(){
    if(this.counter == this.qty){
      this.toastrService.error(`only ${this.qty} items available now`,`Eror`);
      return;
    }
    this.counter ++;
    const product = {
      price:this.price,
      name:this.name,
      image:this.image,
      qty:this.qty,
      code:this.code
    }
    this.cartService.addToCart({ product: product,qty:this.counter})
    this.toastrService.success(`Product Added Successfully To Cart `,`Success`);
  }
  decrease(){
    if(this.counter <1)
      return;
      const product = {
        price:this.price,
        name:this.name,
        image:this.image,
        qty:this.qty,
        code:this.code
      }
      this.cartService.removeFromCart({ product: product,qty:this.counter})
    --this.counter;
  }
}
