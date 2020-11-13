import { Component, OnInit } from '@angular/core';

import { FooterLinks } from '../shared/constants/strings';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerLinks: string[];

  constructor() {
    this.footerLinks = FooterLinks;
  }

  ngOnInit(): void {
  }

}
