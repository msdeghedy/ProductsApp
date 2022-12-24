import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from './../product';
import { CounterService } from '../services/counter.service';
import { QuantityService } from '../services/quantity.service';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  arrOfProducts: Product[] = [];
  counter: number = 0;
  qunatityArr: number[] = [];
  prices: number = 0;
  total: number = 0;
  constructor(
    private cartService: CartService,
    private counterService: CounterService,
    private quantityService: QuantityService
  ) {}

  ngOnInit(): void {
    this.counterService.counterVal.subscribe((val) => (this.counter = val));

    this.cartService.cartArr.subscribe((val) => (this.arrOfProducts = val));

    this.quantityService.quantityVal.subscribe(
      (val) => (this.qunatityArr = val)
    );

    this.total = this.arrOfProducts.reduce(
      (acc: number, cur: any) => acc + +cur.price,
      0
    );
  }

  calcTotal() {
    this.total = 0;
    this.arrOfProducts.forEach(
      (product, i) => (this.total += +product.price * this.qunatityArr[i])
    );
  }

  increaseQuantity(event: any) {
    if (
      this.qunatityArr[event.path[1].id] <
      this.arrOfProducts[event.path[1].id].count
    ) {
      this.qunatityArr[event.path[1].id]++;
      this.counterService.changeCounter(++this.counter);
      this.calcTotal();
    }
  }

  decreaseQuantity(event: any) {
    if (this.qunatityArr[event.path[1].id] > 1) {
      this.qunatityArr[event.path[1].id]--;
      this.counterService.changeCounter(--this.counter);
      this.calcTotal();
    }
  }

  handleRemoveItem(event: any) {
    event.path[2].remove();
    if (this.counter - this.qunatityArr[event.path[1].id] >= 0) {
      this.counterService.changeCounter(
        this.counter - this.qunatityArr[event.path[1].id]
      );
    }

    this.qunatityArr[event.path[1].id] = 0;

    this.calcTotal();

    if (!this.counter) {
      this.cartService.emptyCart();
      this.quantityService.resetQuantity();
    }
  }
}
