import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutappsRoutingModule } from './aboutapps-routing.module';
import { AboutAplikasiComponent } from './about-aplikasi/about-aplikasi.component';


@NgModule({
  declarations: [AboutAplikasiComponent],
  imports: [
    CommonModule,
    AboutappsRoutingModule
  ]
})
export class AboutappsModule { }
