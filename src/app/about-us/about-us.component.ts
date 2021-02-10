import { Component, OnInit } from '@angular/core';

import { AboutUs, Management, ContactUs } from '../shared/constants/strings';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  aboutus: string;
  team = {};
  team_positions: string[];
  contactus: string;

  constructor() {
    this.aboutus = AboutUs;
    this.team = Management;
    this.contactus = ContactUs;
  }

  ngOnInit(): void {
    this.team_positions = Object.keys(this.team);
  }

}
