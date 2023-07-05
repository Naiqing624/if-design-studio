import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingWorkComponent } from './packaging-work.component';

describe('PackagingWorkComponent', () => {
  let component: PackagingWorkComponent;
  let fixture: ComponentFixture<PackagingWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagingWorkComponent]
    });
    fixture = TestBed.createComponent(PackagingWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
