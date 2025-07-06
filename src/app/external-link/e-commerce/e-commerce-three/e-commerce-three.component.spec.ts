import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceThreeComponent } from './e-commerce-three.component';

describe('ECommerceThreeComponent', () => {
  let component: ECommerceThreeComponent;
  let fixture: ComponentFixture<ECommerceThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommerceThreeComponent]
    });
    fixture = TestBed.createComponent(ECommerceThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
