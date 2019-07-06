import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { interval, concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(
    private readonly updates: SwUpdate,
    private readonly appRef: ApplicationRef) {

    this.runIntervalCheckingUpdate();

    this.updates.available.subscribe((event: any) => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);

      this.updateApps();
    });

    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

  }

  updateApps() {
    // force update
    this.updates.activateUpdate().then(() => document.location.reload())
      .catch((error) => console.log(error));
  }

  runIntervalCheckingUpdate() {
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$.subscribe(() => this.updates.checkForUpdate());
  }
}
