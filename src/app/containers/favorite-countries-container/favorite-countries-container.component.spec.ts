import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCountriesContainerComponent } from './favorite-countries-container.component';

describe('FavoriteCountriesContainerComponent', () => {
  let component: FavoriteCountriesContainerComponent;
  let fixture: ComponentFixture<FavoriteCountriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCountriesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCountriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
