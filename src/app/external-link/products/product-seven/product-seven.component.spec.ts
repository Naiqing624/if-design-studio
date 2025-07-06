import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSevenComponent } from './product-seven.component';

describe('ProductSevenComponent', () => {
  let component: ProductSevenComponent;
  let fixture: ComponentFixture<ProductSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSevenComponent]
    });
    fixture = TestBed.createComponent(ProductSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
