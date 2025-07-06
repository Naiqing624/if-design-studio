import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingSixComponent } from './marketing-six.component';

describe('MarketingSixComponent', () => {
  let component: MarketingSixComponent;
  let fixture: ComponentFixture<MarketingSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingSixComponent]
    });
    fixture = TestBed.createComponent(MarketingSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
