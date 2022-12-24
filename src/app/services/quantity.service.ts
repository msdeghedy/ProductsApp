import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuantityService {
  private quantity = new BehaviorSubject([0]);
  private index = new BehaviorSubject([0]);
  quantityVal = this.quantity.asObservable();
  indexVal = this.index.asObservable();
  tempArr: number[] = [];
  tempArrIndexes: number[] = [];

  constructor() {}

  changeQuantity(val: number) {
    this.tempArr.push(val);
    this.quantity.next(this.tempArr);
  }

  setIndex(val: number) {
    this.tempArrIndexes.push(val);
    this.index.next(this.tempArrIndexes);
  }

  resetQuantity() {
    this.tempArr = [];
    this.quantity.next(this.tempArr);
  }
}
