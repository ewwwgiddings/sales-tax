// import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { ReceiptItem } from '../_models/receipt-item';

// @Injectable()
// export class ReceiptResolver implements Resolve<ReceiptItem[]> {

//     constructor(private router: Router) {}

//     resolve(route: ActivatedRouteSnapshot): Observable<ReceiptItem[]> {
//       return this.checkoutService.getReceipt(apiUrl).pipe(
//           catchError(error => {
//             this.router.navigate(['/receipt']);
//             return of(null);
//           })
//       );
//     }
// }
