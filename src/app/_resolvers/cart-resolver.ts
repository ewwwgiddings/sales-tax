// import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
// import { Item } from '../_models/item';
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable()
// export class CartResolver implements Resolve<Item[]> {

//     constructor(private router: Router) {}

//     resolve(route: ActivatedRouteSnapshot): Observable<Item[]> {
//       return this.checkoutService.cartFunction(apiUrl).pipe(
//         catchError(error => {
//           this.router.navigate(['/cart']);
//           return of(null);
//         })
//       );
//     }
// }
