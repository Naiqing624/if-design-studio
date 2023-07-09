import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEightComponent } from './product-eight.component';

describe('ProductEightComponent', () => {
  let component: ProductEightComponent;
  let fixture: ComponentFixture<ProductEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductEightComponent]
    });
    fixture = TestBed.createComponent(ProductEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
