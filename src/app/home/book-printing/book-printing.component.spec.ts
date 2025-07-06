import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPrintingComponent } from './book-printing.component';

describe('BookPrintingComponent', () => {
  let component: BookPrintingComponent;
  let fixture: ComponentFixture<BookPrintingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookPrintingComponent]
    });
    fixture = TestBed.createComponent(BookPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
