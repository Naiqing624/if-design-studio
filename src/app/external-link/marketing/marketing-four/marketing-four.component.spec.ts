import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFourComponent } from './marketing-four.component';

describe('MarketingFourComponent', () => {
  let component: MarketingFourComponent;
  let fixture: ComponentFixture<MarketingFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingFourComponent]
    });
    fixture = TestBed.createComponent(MarketingFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
