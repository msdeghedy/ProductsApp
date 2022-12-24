import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject(false);
  isLoggedInVal = this.isLoggedIn.asObservable();

  constructor() {}

  setAuthService(val: boolean) {
    this.isLoggedIn.next(val);
  }
}
