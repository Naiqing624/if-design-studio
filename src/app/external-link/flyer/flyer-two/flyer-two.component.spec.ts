import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerTwoComponent } from './flyer-two.component';

describe('FlyerTwoComponent', () => {
  let component: FlyerTwoComponent;
  let fixture: ComponentFixture<FlyerTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyerTwoComponent]
    });
    fixture = TestBed.createComponent(FlyerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
