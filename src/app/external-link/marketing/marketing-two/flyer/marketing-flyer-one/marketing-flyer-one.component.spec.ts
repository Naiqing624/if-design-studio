import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFlyerOneComponent } from './marketing-flyer-one.component';

describe('MarketingFlyerOneComponent', () => {
  let component: MarketingFlyerOneComponent;
  let fixture: ComponentFixture<MarketingFlyerOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingFlyerOneComponent]
    });
    fixture = TestBed.createComponent(MarketingFlyerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
