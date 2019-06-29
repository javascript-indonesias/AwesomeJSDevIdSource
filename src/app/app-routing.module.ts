import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'search-js-dev',
    loadChildren: () => import('./search-dev/search-dev.module').then(mods => mods.SearchDevModule)
  },
  {
    path: 'tentang-app',
    loadChildren: () => import('./aboutapps/aboutapps.module').then(mods => mods.AboutappsModule)
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }