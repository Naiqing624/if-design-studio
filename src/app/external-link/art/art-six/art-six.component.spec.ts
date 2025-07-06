import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtSixComponent } from './art-six.component';

describe('ArtSixComponent', () => {
  let component: ArtSixComponent;
  let fixture: ComponentFixture<ArtSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtSixComponent]
    });
    fixture = TestBed.createComponent(ArtSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
