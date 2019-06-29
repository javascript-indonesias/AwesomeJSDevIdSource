import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDevRoutingModule } from './search-dev-routing.module';
import { SearchDeveloperComponent } from './search-developer/search-developer.component';
import { DeveloperDataService } from '../services/developer-data.service';

@NgModule({
  declarations: [SearchDeveloperComponent],
  imports: [
    CommonModule,
    SearchDevRoutingModule
  ],
  providers: [
    DeveloperDataService
  ]
})
export class SearchDevModule { }
