import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFlyerTwoComponent } from './marketing-flyer-two.component';

describe('MarketingFlyerTwoComponent', () => {
  let component: MarketingFlyerTwoComponent;
  let fixture: ComponentFixture<MarketingFlyerTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingFlyerTwoComponent]
    });
    fixture = TestBed.createComponent(MarketingFlyerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
