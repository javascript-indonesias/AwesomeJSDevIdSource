import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
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

  isProgressBarShowed = false;

  constructor(
    @Inject(DOCUMENT) private readonly document: any,
    private readonly dataservice: DeveloperDataService
  ) { }

  ngOnInit() {

    this.showProgress(false);
    this.subscriptions = new Subscription();

    this.getDataDevelopers();
    this.searchFilterSubjectInit();
  }

  /**
   * @description Ambil data dari JSON lokal berisi daftar pengembang
   */
  getDataDevelopers() {

    this.showProgress(true);
    const subs = this.dataservice.getDataDevelopers()
      .subscribe((devResult: DeveloperResult) => {

        this.listPengembang = devResult.listDeveloperArray;
        this.listPengembangFiltered = devResult.listDeveloperArray;
        this.showProgress(false);
      },
        (errors) => {
          console.log(errors);
          this.listPengembangFiltered = this.listPengembang;
          this.showProgress(false);
        });

    this.subscriptions.add(subs);
  }


  /**
   * @description Cari developer dengan kata kunci pencarian yang dimasukkan
   * @param katakunci String kata kunci pencarian
   */
  searchDeveloper(katakunci: string = '') {
    this.showProgress(true);
    this.searchTextSubject$.next(katakunci.toLowerCase());
  }


  /**
   * Inisialisasi filter RxJS untuk pencarian berdasarkan input
   */
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
        this.showProgress(false);
      },
      (error) => {
        this.showProgress(false);
        console.log(error);
      }
    );

    this.subscriptions.add(subs);
  }


  /**
   * @description Track baris list yang ditampilkan
   * @param index Indeks data
   * @param item Item yang akan di track di dalam list
   */
  trackListByFunctions(index: any, item: any) {
    if (!item) {
      return null;
    }
    return item.stringNama;
  }



  checkItemShowed(valueCheck: any): boolean {
    if (valueCheck && valueCheck.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  showProgress(isshow: boolean) {
    if (isshow) {
      this.isProgressBarShowed = true;
    } else {
      this.isProgressBarShowed = false;
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
