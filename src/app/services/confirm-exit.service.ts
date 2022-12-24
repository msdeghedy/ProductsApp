import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmExitService {
  private isDirty = new BehaviorSubject(false);
  isDirtyVal = this.isDirty.asObservable();

  constructor() {}

  setConfirmExitService(val: boolean) {
    this.isDirty.next(val);
  }
}
