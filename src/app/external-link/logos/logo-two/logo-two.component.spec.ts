import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTwoComponent } from './logo-two.component';

describe('LogoTwoComponent', () => {
  let component: LogoTwoComponent;
  let fixture: ComponentFixture<LogoTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoTwoComponent]
    });
    fixture = TestBed.createComponent(LogoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
