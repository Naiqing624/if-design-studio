import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtFiveComponent } from './art-five.component';

describe('ArtFiveComponent', () => {
  let component: ArtFiveComponent;
  let fixture: ComponentFixture<ArtFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtFiveComponent]
    });
    fixture = TestBed.createComponent(ArtFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
