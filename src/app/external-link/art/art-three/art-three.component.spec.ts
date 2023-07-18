import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtThreeComponent } from './art-three.component';

describe('ArtThreeComponent', () => {
  let component: ArtThreeComponent;
  let fixture: ComponentFixture<ArtThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtThreeComponent]
    });
    fixture = TestBed.createComponent(ArtThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
