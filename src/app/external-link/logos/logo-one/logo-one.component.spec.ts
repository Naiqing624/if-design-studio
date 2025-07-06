import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoOneComponent } from './logo-one.component';

describe('LogoOneComponent', () => {
  let component: LogoOneComponent;
  let fixture: ComponentFixture<LogoOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoOneComponent]
    });
    fixture = TestBed.createComponent(LogoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
