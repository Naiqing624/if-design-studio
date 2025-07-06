import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoThreeComponent } from './logo-three.component';

describe('LogoThreeComponent', () => {
  let component: LogoThreeComponent;
  let fixture: ComponentFixture<LogoThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoThreeComponent]
    });
    fixture = TestBed.createComponent(LogoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
