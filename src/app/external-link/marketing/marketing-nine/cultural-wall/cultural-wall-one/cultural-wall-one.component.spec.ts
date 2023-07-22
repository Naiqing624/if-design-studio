import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalWallOneComponent } from './cultural-wall-one.component';

describe('CulturalWallOneComponent', () => {
  let component: CulturalWallOneComponent;
  let fixture: ComponentFixture<CulturalWallOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CulturalWallOneComponent]
    });
    fixture = TestBed.createComponent(CulturalWallOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
