import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {
  @Input() currentIndex: number;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  next(){
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName("item");
    elm.append(item[0]);
    this.currentIndex = (this.currentIndex + 1) % 5;
  }
}
