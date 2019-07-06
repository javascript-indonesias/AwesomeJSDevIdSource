import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchDevRoutingModule } from './search-dev-routing.module';
import { SearchDeveloperComponent } from './search-developer/search-developer.component';
import { DeveloperDataService } from '../services/developer-data.service';
import { LibraryLoadersService } from '../services/library-loaders.service';


@NgModule({
  declarations: [SearchDeveloperComponent],
  imports: [
    CommonModule,
    FormsModule,
    SearchDevRoutingModule
  ],
  providers: [
    DeveloperDataService,
    LibraryLoadersService
  ]
})
export class SearchDevModule { }
