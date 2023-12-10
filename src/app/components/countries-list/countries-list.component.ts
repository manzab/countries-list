import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { Country } from '../../models/country.model';
import { SortState } from '../../models/sort-state.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent {
  @Input() data: ReadonlyArray<Country>;

  @Output() sortChanged = new EventEmitter<SortState>();

  sortState: SortState = 'ascending';

  isModalOpen = false;

  selectedCountry: { name: string; population: number };

  @HostBinding('class.countries-list') get default(): boolean {
    return true;
  }

  showMoreInfo(name: string, population: number) {
    this.selectedCountry = { name, population };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSortChanged() {
    if (this.sortState === 'ascending') {
      this.sortState = 'descending';
    } else {
      this.sortState = 'ascending';
    }

    this.sortChanged.emit(this.sortState);
  }
}
