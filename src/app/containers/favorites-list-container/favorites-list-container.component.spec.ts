import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesListContainerComponent } from './favorites-list-container.component';

describe('FavoriteCountriesContainerComponent', () => {
  let component: FavoritesListContainerComponent;
  let fixture: ComponentFixture<FavoritesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesListContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
