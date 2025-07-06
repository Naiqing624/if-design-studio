import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingNineComponent } from './marketing-nine.component';

describe('MarketingNineComponent', () => {
  let component: MarketingNineComponent;
  let fixture: ComponentFixture<MarketingNineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingNineComponent]
    });
    fixture = TestBed.createComponent(MarketingNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
