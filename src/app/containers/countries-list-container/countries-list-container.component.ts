import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/country.model';
import { SortState } from '../../models/sort-state.model';

@Component({
  selector: 'app-countries-list-container',
  templateUrl: './countries-list-container.component.html',
  styleUrls: ['./countries-list-container.component.scss'],
})
export class CountriesListContainerComponent implements OnInit, OnDestroy {
  currentPage = 1;
  pagesCount: number;
  readonly pageSize = 20;

  totalData: Array<Country> = [];
  pageData: Array<Country> = [];

  @HostBinding('class.countries-list-container')
  get default(): boolean {
    return true;
  }

  constructor(private readonly countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .getAllCountriesList()
      .pipe(take(1))
      .subscribe((data) => {
        this.totalData = data;
        this.pagesCount = Math.ceil(data.length / this.pageSize);

        this.getPageData(this.currentPage);
      });
  }

  getPageData(page: number): void {
    if (this.pageData.length > 0) {
      this.updateCountriesData();
    }

    this.currentPage = page;

    this.pageData = this.totalData
      .slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * this.currentPage,
      )
      .sort((a, b) => this.compareCountries(a, b));
  }

  onSortChanged(sortState: SortState): void {
    if (sortState === 'ascending') {
      this.pageData = this.pageData.sort((a, b) => this.compareCountries(a, b));
    } else {
      this.pageData = this.pageData.sort((a, b) => this.compareCountries(b, a));
    }
  }

  compareCountries(country1: Country, country2: Country) {
    if (country1.name.common < country2.name.common) {
      return -1;
    }

    if (country1.name.common > country2.name.common) {
      return 1;
    }

    return 0;
  }

  onCountryLiked(country: Readonly<Country>): void {
    const countryIndex = this.pageData.findIndex(
      (val) => val.name.common === country.name.common,
    );

    if (country.isFavorite) {
      this.pageData[countryIndex] = {
        ...this.pageData[countryIndex],
        isFavorite: false,
      };

      this.countriesService.setFavoriteCountries(country, true);
    } else {
      this.pageData[countryIndex] = {
        ...this.pageData[countryIndex],
        isFavorite: true,
      };

      this.countriesService.setFavoriteCountries(country);
    }
  }

  ngOnDestroy(): void {
    this.updateCountriesData();
  }

  private updateCountriesData(): void {
    this.totalData.splice(
      this.pageSize * (this.currentPage - 1),
      this.pageSize,
      ...this.pageData,
    );
  }
}
