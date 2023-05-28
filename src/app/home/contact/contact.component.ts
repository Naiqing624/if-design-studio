import { Component, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private readonly footerService: FooterService){}

  ngOnInit(): void {
    this.footerService.setCssClass('footerContact');
  }
}
