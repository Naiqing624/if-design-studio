import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFlyerSixComponent } from './marketing-flyer-six.component';

describe('MarketingFlyerSixComponent', () => {
  let component: MarketingFlyerSixComponent;
  let fixture: ComponentFixture<MarketingFlyerSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingFlyerSixComponent]
    });
    fixture = TestBed.createComponent(MarketingFlyerSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
