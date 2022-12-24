import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { Product } from './../product';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any = {};
  requestDone: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private productServics: ProductsService,
    private loaderService: LoaderService
  ) {
    this.loaderService.isDoneVal.subscribe((val) => (this.requestDone = val));
  }

  ngOnInit(): void {
    this.productServics
      .getProductDetails(this.route.snapshot.params['id'])
      .subscribe((details) => (this.productDetails = details));
  }
}
