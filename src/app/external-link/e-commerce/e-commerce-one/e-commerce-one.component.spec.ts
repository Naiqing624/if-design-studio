import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceOneComponent } from './e-commerce-one.component';

describe('ECommerceOneComponent', () => {
  let component: ECommerceOneComponent;
  let fixture: ComponentFixture<ECommerceOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommerceOneComponent]
    });
    fixture = TestBed.createComponent(ECommerceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
