import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { CART } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:CART[]=[];
  cartActiveNotify = new  BehaviorSubject<number>(0);
  constructor() { }

  addToCart(item:CART) {
    let exist = false;
    this.cart.map((cartItem,key)=>{
      if( cartItem?.product.code == item.product.code) {
         this.cart[key].qty  = this.cart[key].qty + 1;
         exist = true;
      }
    })
    if(exist) {
      this.cartActiveNotify.next(this.cart.length)
      return of(this.cart);
    } else {
      this.cart.push(item);
      this.cartActiveNotify.next(this.cart.length)
      return of(this.cart);
      
    }
  }

  removeFromCart(item:CART) {
    let index = -1;
    this.cart.map((cartItem,key)=>{
      if( cartItem?.product.code == item.product.code) {
         index = key
      }
    })
    if(item.qty > 1) {
      this.cart[index].qty  = this.cart[index].qty - 1;
      this.cartActiveNotify.next(this.cart.length)
    } else {
      this.cart.splice(index,1);
      this.cartActiveNotify.next(this.cart.length)
    }
    return of(this.cart);
  }
  removeItem(item:CART){
    let index = -1;
    this.cart.map((cartItem,key)=>{
      if( cartItem?.product.code == item.product.code) {
         index = key
      }
    })
    this.cart.splice(index,1);
    this.cartActiveNotify.next(this.cart.length)
    return of(true)
  }
  listCart(){
    this.cartActiveNotify.next(this.cart.length)
    return of(this.cart)
  }

}
