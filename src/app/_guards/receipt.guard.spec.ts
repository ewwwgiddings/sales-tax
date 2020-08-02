import { TestBed, async, inject } from '@angular/core/testing';

import { ReceiptGuard } from './receipt.guard';

describe('ReceiptGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceiptGuard]
    });
  });

  it('should ...', inject([ReceiptGuard], (guard: ReceiptGuard) => {
    expect(guard).toBeTruthy();
  }));
});
