import { Component } from '@angular/core';
import {CartService} from "../../serivce/cart.service";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent {

  constructor(public cartService:CartService) {

  }

}
