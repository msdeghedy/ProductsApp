import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmExitService } from './../services/confirm-exit.service';

@Injectable({
  providedIn: 'root',
})
export class WarningGuard implements CanDeactivate<unknown> {
  confirmed: boolean = false;
  constructor(private confirmExitService: ConfirmExitService) {}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.confirmExitService.isDirtyVal.subscribe(
      (val) => (this.confirmed = val)
    );

    if (this.confirmed) {
      if (!confirm('Are you sure?')) {
        return false;
      }
    }

    return true;
  }
}
