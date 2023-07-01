import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuqinshanComponent } from './yuqinshan.component';

describe('YuqinshanComponent', () => {
  let component: YuqinshanComponent;
  let fixture: ComponentFixture<YuqinshanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YuqinshanComponent]
    });
    fixture = TestBed.createComponent(YuqinshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
