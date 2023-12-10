import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private favoriteCountries: Array<Country> = [];
  private countriesList$: Observable<Array<Country>>;

  constructor(private readonly httpClient: HttpClient) {}

  getAllCountriesList(): Observable<Array<Country>> {
    if (!this.countriesList$) {
      this.countriesList$ = this.httpClient
        .get<Array<Country>>('https://restcountries.com/v3.1/all', {
          params: {
            fields: ['name,region,area,capital,unMember,population,cca3,flags'],
          },
        })
        .pipe(shareReplay());
    }

    return this.countriesList$;
  }

  getFavoriteCountries(): ReadonlyArray<Country> {
    return this.favoriteCountries;
  }

  setFavoriteCountries(country: Readonly<Country>, isUnliked?: boolean) {
    if (isUnliked) {
      this.favoriteCountries = this.favoriteCountries.filter(
        (val) => val.cca3 !== country.cca3,
      );
    } else {
      this.favoriteCountries = [...this.favoriteCountries, country];
    }
  }
}
