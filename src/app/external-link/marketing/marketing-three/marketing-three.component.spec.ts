import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingThreeComponent } from './marketing-three.component';

describe('MarketingThreeComponent', () => {
  let component: MarketingThreeComponent;
  let fixture: ComponentFixture<MarketingThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingThreeComponent]
    });
    fixture = TestBed.createComponent(MarketingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
