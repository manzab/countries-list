import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private favoriteCountries: Array<Country> = [];
  private allCountries: Array<Country> = [];

  constructor(private readonly httpClient: HttpClient) {}

  fetchAllCountriesList(): Observable<Array<Country>> {
    return this.httpClient.get<Array<Country>>(
      'https://restcountries.com/v3.1/all',
      {
        params: {
          fields: ['name,region,area,capital,unMember,population,cca3,flags'],
        },
      },
    );
  }

  getAllCountries(): Array<Country> {
    return this.allCountries;
  }

  setAllCountries(countries: Array<Country>): void {
    this.allCountries = countries;
  }

  getFavoriteCountries(): Array<Country> {
    return this.favoriteCountries;
  }

  setFavoriteCountries(country: Country, isFavorite: boolean) {
    console.log(isFavorite);

    if (!isFavorite) {
      this.favoriteCountries = this.favoriteCountries.filter(
        (val) => val.cca3 !== country.cca3,
      );
    } else {
      this.favoriteCountries = [...this.favoriteCountries, country];
    }
  }
}
