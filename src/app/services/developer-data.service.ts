import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, catchError } from 'rxjs/operators';
import { DeveloperItem } from '../models/DeveloperItem';
import { DeveloperResult } from '../models/DeveloperResult';


@Injectable({
  providedIn: 'root'
})
export class DeveloperDataService {

  private urlRequest = 'assets/developers.json';

  constructor(private http: HttpClient) { }


  /**
   * @description Ambil data daftar pengembang dari JSON lokal
   */
  getDataDevelopers() {

    const requestObservable = this.http.get(this.urlRequest).pipe(
      map((data: any) => {
        const dataModel: any = data;
        const listDev: any[] = dataModel.data;

        // mapping ke object
        const arrayDeveloperItem: DeveloperItem[] = listDev.map((object) => {
          return new DeveloperItem(object);
        });

        const developerResult: DeveloperResult = new DeveloperResult(arrayDeveloperItem);
        return developerResult;
      }),
      catchError(this.handleErrors)
    );

    return requestObservable;
  }


  /**
   * @description Cari data pengembang dengan kata kunci pencarian tertentu
   * @param listDev array daftar pengembang
   * @param stringKataKunci kata kunci pencarian
   */
  filterDataPengembang(listDev: any, stringKataKunci: string) {

    const observableFilter = Observable.create((observer) => {

      const listDeveloperFilter = listDev.filter((developer: DeveloperItem) => {

        const regex = new RegExp(`^${stringKataKunci}`, 'gi');

        return developer.stringNama.match(regex) || developer.stringSkill.match(regex) ||
        developer.stringGithubAlias.match(regex) || developer.stringFacebookAlias.match(regex) ||
        developer.stringTwitterAlias.match(regex) ||
        developer.stringLinkedinAlias.match(regex) ||
        developer.stringBlogAlias.match(regex) ||
        developer.stringMediumAlias.match(regex);
      });

      observer.next(listDeveloperFilter);
      observer.complete();
    })
      .pipe(
        catchError(this.handleErrors)
      );
  }


  /**
   * @description Error yang muncul akan di tampilkan
   * @param error eksepsi error
   */
  handleErrors(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
