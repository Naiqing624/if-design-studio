import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalWallFourComponent } from './cultural-wall-four.component';

describe('CulturalWallFourComponent', () => {
  let component: CulturalWallFourComponent;
  let fixture: ComponentFixture<CulturalWallFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CulturalWallFourComponent]
    });
    fixture = TestBed.createComponent(CulturalWallFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
