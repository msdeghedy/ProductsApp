import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  counter: number = 0;
  favCounter: number = 0;
  isLoggedIn: boolean = false;

  constructor(
    private counterService: CounterService,
    private store: Store<{ counter: any }>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.counterService.counterVal.subscribe((val) => (this.counter = val));
    this.store
      .select('counter')
      .subscribe((val) => (this.favCounter = val.count));

    this.authService.isLoggedInVal.subscribe((val) => (this.isLoggedIn = val));
  }

  handleClickOnNavIcons() {
    if (!this.isLoggedIn) alert('Please Login to see the list!');
  }
}
