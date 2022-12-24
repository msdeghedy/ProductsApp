import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
})
export class FavouritesComponent implements OnInit {
  productsItems: Array<Product> = [
    {
      createdAt: '',
      name: '',
      image: '',
      description: '',
      rate: 0,
      count: 0,
      price: '',
      reviews: [],
      id: '',
    },
  ];

  constructor(private router: Router, private store: Store<{ counter: any }>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((res) => (this.productsItems = res.items));
    console.log(this.productsItems);
  }
}
