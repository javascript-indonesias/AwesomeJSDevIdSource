import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAplikasiComponent } from './about-aplikasi/about-aplikasi.component';

const routes: Routes = [
  {
    path: '',
    component: AboutAplikasiComponent
  },
  {
    path: '**',
    redirectTo: '/tentang-app',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutappsRoutingModule { }
