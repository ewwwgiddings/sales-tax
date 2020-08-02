import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot): boolean {
    return true;
  }
}
