import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isDone = new BehaviorSubject(false);
  isDoneVal = this.isDone.asObservable();

  constructor() {}

  setLoaderService(val: boolean) {
    this.isDone.next(val);
  }
}
