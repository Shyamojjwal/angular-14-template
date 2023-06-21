import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '@app-core/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInverseGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this._authService.isAuthenticated();
    if (isLoggedIn) {
      this._router.navigate(['/']);
      return false;
    }
    return true;
  }

}
