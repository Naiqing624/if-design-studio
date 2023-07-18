import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtFourComponent } from './art-four.component';

describe('ArtFourComponent', () => {
  let component: ArtFourComponent;
  let fixture: ComponentFixture<ArtFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtFourComponent]
    });
    fixture = TestBed.createComponent(ArtFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
