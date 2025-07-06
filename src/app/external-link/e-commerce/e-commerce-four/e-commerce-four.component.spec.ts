import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceFourComponent } from './e-commerce-four.component';

describe('ECommerceFourComponent', () => {
  let component: ECommerceFourComponent;
  let fixture: ComponentFixture<ECommerceFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommerceFourComponent]
    });
    fixture = TestBed.createComponent(ECommerceFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
