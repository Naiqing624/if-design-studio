import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryoosiComponent } from './karyoosi.component';

describe('KaryoosiComponent', () => {
  let component: KaryoosiComponent;
  let fixture: ComponentFixture<KaryoosiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaryoosiComponent]
    });
    fixture = TestBed.createComponent(KaryoosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
