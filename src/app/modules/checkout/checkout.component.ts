import { Component, OnInit } from '@angular/core';
import { CART } from 'src/app/@resources/models/cart';
import { CartService } from 'src/app/@resources/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cart:CART[] = [];
  subTotal:number=0;
  deliveryFees:number = 10;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.cartActiveNotify.subscribe((data) =>{
      this.cartService.listCart().subscribe(data =>{
        this.cart = data;
        this.calcSubTotal();
       })
    })

    this.cartService.listCart().subscribe(data =>{
     this.cart = data;
     this.calcSubTotal();
    })

  }

  calcSubTotal() {
    this.subTotal = 0;
    this.cart.filter( item => {
      this.subTotal += item.qty * Number(item.product.price) ;
    })
  }

}
