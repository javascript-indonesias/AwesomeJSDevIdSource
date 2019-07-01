import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { LibraryLoadersService } from 'src/app/services/library-loaders.service';
import { DOCUMENT } from '@angular/common';
import { DeveloperItem } from 'src/app/models/DeveloperItem';
import { Subscription, Subject } from 'rxjs';
import { DeveloperDataService } from 'src/app/services/developer-data.service';
import { DeveloperResult } from 'src/app/models/DeveloperResult';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-developer',
  templateUrl: './search-developer.component.html',
  styleUrls: ['./search-developer.component.css']
})
export class SearchDeveloperComponent implements OnInit, OnDestroy {

  stringPencarian = '';
  listPengembang: DeveloperItem[] = [];
  listPengembangFiltered: DeveloperItem[] = [];

  subscriptions: Subscription = new Subscription();

  private searchTextSubject$ = new Subject<string>();

  constructor(
    private readonly loaders: LibraryLoadersService,
    @Inject(DOCUMENT) private readonly document: any,
    private readonly dataservice: DeveloperDataService
  ) { }

  ngOnInit() {

    this.loaders.loadBootstrapLibrary().subscribe(
      (_: any) => {
        console.log('library loaded');
      }
    );

    this.subscriptions = new Subscription();

    this.getDataDevelopers();
    this.searchFilterSubjectInit();
  }

  getDataDevelopers() {

    const subs = this.dataservice.getDataDevelopers()
      .subscribe((devResult: DeveloperResult) => {

        this.listPengembang = devResult.listDeveloperArray;
        this.listPengembangFiltered = devResult.listDeveloperArray;
      },
        (errors) => {
          console.log(errors);
          this.listPengembangFiltered = this.listPengembang;
        });

    this.subscriptions.add(subs);
  }

  searchDeveloper(katakunci: string = '') {
    this.searchTextSubject$.next(katakunci);
  }

  searchFilterSubjectInit() {

    const subs = this.searchTextSubject$.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((stringKunci: any) => {
        return this.dataservice.filterDataPengembang(this.listPengembang, stringKunci);
      })
    ).subscribe(
      (result: any) => {
        if (result && result.length > 0) {
          this.listPengembangFiltered = result;
        } else {
          this.listPengembangFiltered = [];
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.subscriptions.add(subs);
  }

  trackListByFunctions(index: any, item: any) {
    if (!item) {
      return null;
    }
    return item.stringNama;
  }

  checkItemShowed(valueCheck: any): boolean {
    if (!valueCheck && valueCheck.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
