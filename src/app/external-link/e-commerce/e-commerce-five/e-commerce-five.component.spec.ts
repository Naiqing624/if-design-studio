import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceFiveComponent } from './e-commerce-five.component';

describe('ECommerceFiveComponent', () => {
  let component: ECommerceFiveComponent;
  let fixture: ComponentFixture<ECommerceFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommerceFiveComponent]
    });
    fixture = TestBed.createComponent(ECommerceFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
