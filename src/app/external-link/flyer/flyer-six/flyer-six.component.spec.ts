import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerSixComponent } from './flyer-six.component';

describe('FlyerSixComponent', () => {
  let component: FlyerSixComponent;
  let fixture: ComponentFixture<FlyerSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyerSixComponent]
    });
    fixture = TestBed.createComponent(FlyerSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
