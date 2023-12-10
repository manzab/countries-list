import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CountriesListService } from '../../services/countries-list.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-countries-list-container',
  templateUrl: './countries-list-container.component.html',
  styleUrls: ['./countries-list-container.component.scss'],
})
export class CountriesListContainerComponent implements OnInit {
  pagesCount: number;
  page = 1;
  pageSize = 20;

  totalData: ReadonlyArray<Country>;
  pageData: ReadonlyArray<Country>;

  constructor(private readonly countriesListService: CountriesListService) {}

  ngOnInit(): void {
    this.countriesListService
      .getCountriesList()
      .pipe(take(1))
      .subscribe((data) => {
        this.totalData = data;
        this.pagesCount = Math.ceil(data.length / this.pageSize);

        this.getPageData(this.page);
      });
  }

  getPageData(page: number) {
    this.page = page;

    this.pageData = this.totalData.slice(
      this.pageSize * (this.page - 1),
      this.pageSize * this.page,
    );
  }
}
