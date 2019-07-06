import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibraryLoadersService } from './services/library-loaders.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'AwesomeJSDevId';

  subscriptions: Subscription = new Subscription();

  constructor(private readonly loaders: LibraryLoadersService) {}

  ngOnInit(): void {

    this.subscriptions = new Subscription();

    const subs = this.loaders.loadBootstrapLibrary().subscribe(
      (_: any) => {
        console.log('library loaded');
      }
    );

    this.subscriptions.add(subs);
  }


  ngOnDestroy(): void {

    this.subscriptions.unsubscribe();
  }
}
