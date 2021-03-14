import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/@resources/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() price:any;
  @Input() name:any;
  @Input() image:any;
  @Input() qty:any;
  @Input() code:any;
  @Input() counter:any;
  constructor(private toastrService:ToastrService, private cartService:CartService) { }

  ngOnInit(): void {
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
  
  removeItem(){
    const product = {
      price:this.price,
      name:this.name,
      image:this.image,
      qty:this.qty,
      code:this.code
    }

    this.cartService.removeItem({ product: product,qty:this.counter}).subscribe((res) =>{
      this.toastrService.success(`Product Removed Successfully From Cart `,`Success`)
    })
    
  }
}
