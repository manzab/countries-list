import { Component, HostBinding, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-favorites-list-container',
  templateUrl: './favorites-list-container.component.html',
  styleUrls: ['./favorites-list-container.component.scss'],
})
export class FavoritesListContainerComponent implements OnInit {
  countries: Array<Country>;

  constructor(private readonly countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.getFavoriteCountries();
  }
}
