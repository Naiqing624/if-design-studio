import { Component } from '@angular/core';

@Component({
  selector: 'app-yuqinshan',
  templateUrl: './yuqinshan.component.html',
  styleUrls: ['./yuqinshan.component.scss']
})
export class YuqinshanComponent {

  images: string[] = ['../../../assets/images/slideshow/1.png', '../../../assets/images/slideshow/2.png', '../../../assets/images/slideshow/3.png', '../../../assets/images/slideshow/4.png',
                      '../../../assets/images/slideshow/1.png', '../../../assets/images/slideshow/2.png', '../../../assets/images/slideshow/3.png', '../../../assets/images/slideshow/4.png']; 

  currentIndex: number = 0;

  showNext() {
    if (this.currentIndex < this.images.length - 4) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Revenir au début
    }
  }
  
  showPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 4; // Aller à la fin
    }
  }
  

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }
}
