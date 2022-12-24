import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { CounterService } from './../services/counter.service';
import { ProductsService } from './../services/products.service';
import { CartService } from './../services/cart.service';
import { QuantityService } from '../services/quantity.service';
import { LoaderService } from '../services/loader.service';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import {
  decreaseCounter,
  increaseCounter,
} from '../store/favouritesCounter/favouritesCounter.action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  counter: number = 0;
  added: boolean = false;
  addedToFavourites: boolean = false;
  loggedIn: boolean = false;
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

  @Output() triggerChangeInChild = new EventEmitter();

  constructor(
    private router: Router,
    private counterService: CounterService,
    private productService: ProductsService,
    private cartService: CartService,
    private quantityService: QuantityService,
    private loaderService: LoaderService,
    private authService: AuthService,
    private store: Store<{ counter: any }>
  ) {}

  ngOnInit(): void {
    this.counterService.counterVal.subscribe((val) => (this.counter = val));
    this.cartService.cartArr.subscribe((val) => {
      val.forEach((prd) => {
        if (prd.id == this.product.id) this.product = prd;
      });
    });

    this.store.select('counter').subscribe((res) => {
      res.items.forEach((itm: any) => {
        if (itm.id === this.product.id) this.addedToFavourites = true;
      });
    });
  }

  handleClickOnDetails() {
    this.router.navigate(['/product-details', this.product.id]);
    this.productService
      .getProductDetails(this.product.id)
      .subscribe((product) => console.log(product));

    this.loaderService.setLoaderService(false);
  }

  handleClickOnCartButton() {
    this.authService.isLoggedInVal.subscribe((val) => (this.loggedIn = val));
    this.triggerChangeInChild.emit(this.product.id);
    this.counterService.changeCounter(++this.counter);
    this.cartService.changeCart(this.product);
    this.quantityService.changeQuantity(1);
    this.added = true;
  }

  handleClickOnFavouritesBtn() {
    this.store.dispatch(increaseCounter({ item: this.product }));
  }
}
