import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalWallFiveComponent } from './cultural-wall-five.component';

describe('CulturalWallFiveComponent', () => {
  let component: CulturalWallFiveComponent;
  let fixture: ComponentFixture<CulturalWallFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CulturalWallFiveComponent]
    });
    fixture = TestBed.createComponent(CulturalWallFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
