import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestWorkOneComponent } from './newest-work-one.component';

describe('NewestWorkOneComponent', () => {
  let component: NewestWorkOneComponent;
  let fixture: ComponentFixture<NewestWorkOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewestWorkOneComponent]
    });
    fixture = TestBed.createComponent(NewestWorkOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
