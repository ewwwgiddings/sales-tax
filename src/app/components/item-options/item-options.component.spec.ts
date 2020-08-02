import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOptionsComponent } from './item-options.component';

describe('ItemOptionsComponent', () => {
  let component: ItemOptionsComponent;
  let fixture: ComponentFixture<ItemOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
