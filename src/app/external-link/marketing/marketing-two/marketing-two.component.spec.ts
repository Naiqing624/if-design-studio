import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingTwoComponent } from './marketing-two.component';

describe('MarketingTwoComponent', () => {
  let component: MarketingTwoComponent;
  let fixture: ComponentFixture<MarketingTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingTwoComponent]
    });
    fixture = TestBed.createComponent(MarketingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
