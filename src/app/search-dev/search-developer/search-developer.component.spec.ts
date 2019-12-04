import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeveloperComponent } from './search-developer.component';

describe('SearchDeveloperComponent', () => {
  let component: SearchDeveloperComponent;
  let fixture: ComponentFixture<SearchDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
