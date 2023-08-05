import { Component, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  citationOne = 'ABOUT.CITATION-ONE';
  citationTwo = 'ABOUT.CITATION-TWO';

  constructor(private readonly footerService: FooterService){}

  ngOnInit(): void {
    this.footerService.setCssClass('footer');
  }
}
