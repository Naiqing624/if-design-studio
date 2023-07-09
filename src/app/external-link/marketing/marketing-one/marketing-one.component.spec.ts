import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingOneComponent } from './marketing-one.component';

describe('MarketingOneComponent', () => {
  let component: MarketingOneComponent;
  let fixture: ComponentFixture<MarketingOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingOneComponent]
    });
    fixture = TestBed.createComponent(MarketingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
