import { Component, HostBinding, Input } from '@angular/core';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-favorite-countries-list',
  templateUrl: './favorite-countries-list.component.html',
  styleUrls: ['./favorite-countries-list.component.scss'],
})
export class FavoriteCountriesListComponent {
  @Input('countries') countries: ReadonlyArray<Country>;

  @HostBinding('class.favorite-countries-list') get default(): boolean {
    return true;
  }
}
