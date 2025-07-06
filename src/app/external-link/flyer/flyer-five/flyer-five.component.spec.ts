import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerFiveComponent } from './flyer-five.component';

describe('FlyerFiveComponent', () => {
  let component: FlyerFiveComponent;
  let fixture: ComponentFixture<FlyerFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyerFiveComponent]
    });
    fixture = TestBed.createComponent(FlyerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
