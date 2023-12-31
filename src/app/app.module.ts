import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CountriesListContainerComponent } from './containers/countries-list-container/countries-list-container.component';
import { FavoritesListContainerComponent } from './containers/favorites-list-container/favorites-list-container.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    PaginationComponent,
    NavigationComponent,
    CountriesListContainerComponent,
    FavoritesListContainerComponent,
    FavoritesListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
