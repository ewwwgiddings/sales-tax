import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot): boolean {
    return true;
  }
}
