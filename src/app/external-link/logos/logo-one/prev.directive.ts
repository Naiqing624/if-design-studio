import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {
  @Input() currentIndex: number;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  prev(){
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName("item");
    elm.prepend(item[item.length - 1]);
    this.currentIndex = (this.currentIndex - 1 + 5) % 5;
  }
}
