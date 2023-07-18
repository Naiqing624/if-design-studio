import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtOneComponent } from './art-one.component';

describe('ArtOneComponent', () => {
  let component: ArtOneComponent;
  let fixture: ComponentFixture<ArtOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtOneComponent]
    });
    fixture = TestBed.createComponent(ArtOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
