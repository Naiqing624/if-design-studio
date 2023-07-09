import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceTwoComponent } from './e-commerce-two.component';

describe('ECommerceTwoComponent', () => {
  let component: ECommerceTwoComponent;
  let fixture: ComponentFixture<ECommerceTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommerceTwoComponent]
    });
    fixture = TestBed.createComponent(ECommerceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
