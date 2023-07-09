import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingSevenComponent } from './marketing-seven.component';

describe('MarketingSevenComponent', () => {
  let component: MarketingSevenComponent;
  let fixture: ComponentFixture<MarketingSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingSevenComponent]
    });
    fixture = TestBed.createComponent(MarketingSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
