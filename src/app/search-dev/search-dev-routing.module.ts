import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDeveloperComponent } from './search-developer/search-developer.component';


const routes: Routes = [
  {
    path: '',
    component: SearchDeveloperComponent
  },
  {
    path: '**',
    redirectTo: '/search-js-dev',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDevRoutingModule { }
