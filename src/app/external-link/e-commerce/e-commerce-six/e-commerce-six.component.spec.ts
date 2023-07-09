import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceSixComponent } from './e-commerce-six.component';

describe('ECommerceSixComponent', () => {
  let component: ECommerceSixComponent;
  let fixture: ComponentFixture<ECommerceSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommerceSixComponent]
    });
    fixture = TestBed.createComponent(ECommerceSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
