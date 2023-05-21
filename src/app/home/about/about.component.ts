import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isExpanded = false;

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
