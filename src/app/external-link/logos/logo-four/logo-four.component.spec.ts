import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFourComponent } from './logo-four.component';

describe('LogoFourComponent', () => {
  let component: LogoFourComponent;
  let fixture: ComponentFixture<LogoFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoFourComponent]
    });
    fixture = TestBed.createComponent(LogoFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
