import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFlyerFourComponent } from './marketing-flyer-four.component';

describe('MarketingFlyerFourComponent', () => {
  let component: MarketingFlyerFourComponent;
  let fixture: ComponentFixture<MarketingFlyerFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingFlyerFourComponent]
    });
    fixture = TestBed.createComponent(MarketingFlyerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
