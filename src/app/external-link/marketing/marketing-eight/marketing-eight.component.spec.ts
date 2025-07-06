import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingEightComponent } from './marketing-eight.component';

describe('MarketingEightComponent', () => {
  let component: MarketingEightComponent;
  let fixture: ComponentFixture<MarketingEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingEightComponent]
    });
    fixture = TestBed.createComponent(MarketingEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
