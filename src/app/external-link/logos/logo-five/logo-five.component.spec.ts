import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFiveComponent } from './logo-five.component';

describe('LogoFiveComponent', () => {
  let component: LogoFiveComponent;
  let fixture: ComponentFixture<LogoFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoFiveComponent]
    });
    fixture = TestBed.createComponent(LogoFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
