import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './../product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  isExist: boolean = false;
  existedProductIndex: number = 0;
  private cartProducts = new BehaviorSubject([
    {
      createdAt: '',
      name: '',
      image: '',
      description: '',
      rate: 0,
      count: 0,
      price: '',
      reviews: [''],
      id: '',
    },
  ]);
  tempArr: Product[] = [];
  cartArr = this.cartProducts.asObservable();
  constructor() {}

  changeCart(obj: Product) {
    this.tempArr.forEach((element, i) => {
      if (element.id == obj.id) {
        this.isExist = true;
        this.existedProductIndex = i;
      }
    });

    if (!this.isExist) {
      obj.count--;

      this.tempArr.push(obj);
    } else {
      this.tempArr[this.existedProductIndex].count--;
    }

    this.isExist = false;

    return this.cartProducts.next(this.tempArr);
  }

  emptyCart() {
    this.tempArr = [];
    this.cartProducts.next(this.tempArr);
  }
}
