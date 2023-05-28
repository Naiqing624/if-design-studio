import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.css']
})
export class UiUxComponent {
  isExpanded = false;

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
