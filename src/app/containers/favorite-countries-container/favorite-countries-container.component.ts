import { Component, HostBinding, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-favorite-countries-container',
  templateUrl: './favorite-countries-container.component.html',
  styleUrls: ['./favorite-countries-container.component.scss'],
})
export class FavoriteCountriesContainerComponent implements OnInit {
  countries: ReadonlyArray<Country>;

  constructor(private readonly countriesService: CountriesService) {}

  @HostBinding('class.favorite-countries') get default(): boolean {
    return true;
  }

  ngOnInit(): void {
    this.countries = this.countriesService.getFavoriteCountries();
  }
}
