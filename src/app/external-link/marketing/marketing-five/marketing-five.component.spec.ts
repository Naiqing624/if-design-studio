import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFiveComponent } from './marketing-five.component';

describe('MarketingFiveComponent', () => {
  let component: MarketingFiveComponent;
  let fixture: ComponentFixture<MarketingFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingFiveComponent]
    });
    fixture = TestBed.createComponent(MarketingFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
