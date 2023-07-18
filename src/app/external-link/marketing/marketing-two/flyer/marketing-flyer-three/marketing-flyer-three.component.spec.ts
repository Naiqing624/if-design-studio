import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFlyerThreeComponent } from './marketing-flyer-three.component';

describe('MarketingFlyerThreeComponent', () => {
  let component: MarketingFlyerThreeComponent;
  let fixture: ComponentFixture<MarketingFlyerThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingFlyerThreeComponent]
    });
    fixture = TestBed.createComponent(MarketingFlyerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
