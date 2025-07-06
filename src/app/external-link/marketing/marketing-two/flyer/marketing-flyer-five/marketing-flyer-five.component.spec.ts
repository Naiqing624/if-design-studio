import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFlyerFiveComponent } from './marketing-flyer-five.component';

describe('MarketingFlyerFiveComponent', () => {
  let component: MarketingFlyerFiveComponent;
  let fixture: ComponentFixture<MarketingFlyerFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingFlyerFiveComponent]
    });
    fixture = TestBed.createComponent(MarketingFlyerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
