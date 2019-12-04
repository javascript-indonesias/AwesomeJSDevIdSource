import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAplikasiComponent } from './about-aplikasi.component';

describe('AboutAplikasiComponent', () => {
  let component: AboutAplikasiComponent;
  let fixture: ComponentFixture<AboutAplikasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAplikasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAplikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
