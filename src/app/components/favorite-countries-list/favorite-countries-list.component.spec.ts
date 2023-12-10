import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCountriesListComponent } from './favorite-countries-list.component';

describe('FavoriteCountriesListComponent', () => {
  let component: FavoriteCountriesListComponent;
  let fixture: ComponentFixture<FavoriteCountriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCountriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
