import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNineComponent } from './product-nine.component';

describe('ProductNineComponent', () => {
  let component: ProductNineComponent;
  let fixture: ComponentFixture<ProductNineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductNineComponent]
    });
    fixture = TestBed.createComponent(ProductNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
