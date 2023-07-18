import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerOneComponent } from './flyer-one.component';

describe('FlyerOneComponent', () => {
  let component: FlyerOneComponent;
  let fixture: ComponentFixture<FlyerOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyerOneComponent]
    });
    fixture = TestBed.createComponent(FlyerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
