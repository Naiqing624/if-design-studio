import { Component } from '@angular/core';
import { FooterService } from 'src/app/home/services/footer.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css']
})
export class FooterMenuComponent {
  currentUrl: string;

  constructor(public readonly footerService: FooterService) { }

}
