import { Component, HostListener, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  removeImage = false;

  constructor(private readonly footerService: FooterService){}

  ngOnInit(): void {
    this.footerService.setCssClass('footerContact');
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize(): void{
    if (window.innerWidth < 900) {
      this.removeImage = true;
    }else {
      this.removeImage = false;
    }
  }
}
