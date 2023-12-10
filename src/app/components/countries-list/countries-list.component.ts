import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { Country } from '../../models/country.model';
import { SortState } from '../../models/sort-state.model';

interface SelectedCountry {
  name: string;
  population: number;
}

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent {
  @Input() data: Array<Country>;

  @Output() sortChanged = new EventEmitter<SortState>();
  @Output() countryLiked = new EventEmitter<Country>();

  sortState: SortState = 'ascending';
  isModalOpen = false;
  selectedCountry: Country;

  @HostBinding('class.countries-list') get default(): boolean {
    return true;
  }

  showMoreInfo(country: Country) {
    this.selectedCountry = country;
    this.isModalOpen = true;
  }

  changeCountryStatus(country: Country): void {
    this.countryLiked.emit(country);
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onSortChanged(): void {
    if (this.sortState === 'ascending') {
      this.sortState = 'descending';
    } else {
      this.sortState = 'ascending';
    }

    this.sortChanged.emit(this.sortState);
  }
}
