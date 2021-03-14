import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/@resources/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService:CartService) { }
  notifyCart:boolean = false;
  ngOnInit(): void {
    this.cartService.cartActiveNotify.subscribe((data) =>{
      this.cartService.cartActiveNotify.subscribe(data =>{
        if(data>0){
          this.notifyCart = true;
        } else {
          this.notifyCart = false;
        }
       })
    })
  }

}
