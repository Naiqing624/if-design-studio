import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalWallThreeComponent } from './cultural-wall-three.component';

describe('CulturalWallThreeComponent', () => {
  let component: CulturalWallThreeComponent;
  let fixture: ComponentFixture<CulturalWallThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CulturalWallThreeComponent]
    });
    fixture = TestBed.createComponent(CulturalWallThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
