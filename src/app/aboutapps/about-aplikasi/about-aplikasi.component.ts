import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-aplikasi',
  templateUrl: './about-aplikasi.component.html',
  styleUrls: ['./about-aplikasi.component.css']
})
export class AboutAplikasiComponent implements OnInit {

  datePrivacyPolicy = '';

  constructor(private readonly routers: Router) { }

  ngOnInit() {
    this.initDates();
  }

  navigasiHalamanAwal() {
    this.routers.navigate(['/search-js-dev']);
  }

  initDates() {

    const date = new Date();
    const stringTahun = date.getFullYear();
    this.datePrivacyPolicy = `${stringTahun}`;
  }
}
