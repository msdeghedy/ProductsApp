import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { decreaseCounter } from '../store/favouritesCounter/favouritesCounter.action';

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
})
export class FavCardComponent implements OnInit {
  @Input() product: Product = {
    createdAt: '',
    name: '',
    image: '',
    description: '',
    rate: 0,
    count: 0,
    price: '',
    reviews: [],
    id: '',
  };

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  handleClickOnDetailsBtn() {
    this.router.navigate(['/product-details', this.product.id]);
  }

  handleClickOnRemoveBtn(id: string) {
    this.store.dispatch(decreaseCounter({ id: id }));
  }
}
