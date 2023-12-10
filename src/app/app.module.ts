import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CountriesListContainerComponent } from './containers/countries-list-container/countries-list-container.component';
import { FavoriteCountriesContainerComponent } from './containers/favorite-countries-container/favorite-countries-container.component';
import { FavoriteCountriesListComponent } from './components/favorite-countries-list/favorite-countries-list.component';

@NgModule({
  declarations: [AppComponent, CountriesListComponent, PaginationComponent, NavigationComponent, CountriesListContainerComponent, FavoriteCountriesContainerComponent, FavoriteCountriesListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
