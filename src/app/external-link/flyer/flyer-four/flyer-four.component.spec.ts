import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerFourComponent } from './flyer-four.component';

describe('FlyerFourComponent', () => {
  let component: FlyerFourComponent;
  let fixture: ComponentFixture<FlyerFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyerFourComponent]
    });
    fixture = TestBed.createComponent(FlyerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
