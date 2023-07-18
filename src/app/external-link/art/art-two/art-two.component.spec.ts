import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTwoComponent } from './art-two.component';

describe('ArtTwoComponent', () => {
  let component: ArtTwoComponent;
  let fixture: ComponentFixture<ArtTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtTwoComponent]
    });
    fixture = TestBed.createComponent(ArtTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
