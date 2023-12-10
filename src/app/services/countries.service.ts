import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesListService {
  constructor(private readonly httpClient: HttpClient) {}

  getCountriesList(): Observable<ReadonlyArray<Country>> {
    return this.httpClient.get<ReadonlyArray<Country>>(
      'https://restcountries.com/v3.1/all',
      { params: { fields: ['name,region,area,capital,unMember,population'] } },
    );
  }
}
