import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerThreeComponent } from './flyer-three.component';

describe('FlyerThreeComponent', () => {
  let component: FlyerThreeComponent;
  let fixture: ComponentFixture<FlyerThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyerThreeComponent]
    });
    fixture = TestBed.createComponent(FlyerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
