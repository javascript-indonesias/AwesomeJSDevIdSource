import { Component, OnInit, Inject } from '@angular/core';
import { LibraryLoadersService } from 'src/app/services/library-loaders.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search-developer',
  templateUrl: './search-developer.component.html',
  styleUrls: ['./search-developer.component.css']
})
export class SearchDeveloperComponent implements OnInit {

  stringPencarian = '';

  constructor(
    private readonly loaders: LibraryLoadersService,
    @Inject(DOCUMENT) private readonly document: any
  ) { }

  ngOnInit() {

    this.loaders.loadBootstrapLibrary().subscribe(
      (_: any) => {
        console.log('library loaded');
      }
    );
  }

  searchDeveloper(katakunci: string = '') {

  }
}
