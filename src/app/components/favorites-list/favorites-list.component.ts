import { Component, HostBinding, Input } from '@angular/core';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss'],
})
export class FavoritesListComponent {
  @Input('countries') countries: Array<Country>;

  @HostBinding('class.favorites-list') get default(): boolean {
    return true;
  }
}
