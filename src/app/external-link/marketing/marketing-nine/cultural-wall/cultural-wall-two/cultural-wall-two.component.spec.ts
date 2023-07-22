import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalWallTwoComponent } from './cultural-wall-two.component';

describe('CulturalWallTwoComponent', () => {
  let component: CulturalWallTwoComponent;
  let fixture: ComponentFixture<CulturalWallTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CulturalWallTwoComponent]
    });
    fixture = TestBed.createComponent(CulturalWallTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
