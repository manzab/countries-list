import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListContainerComponent } from './containers/countries-list-container/countries-list-container.component';
import { FavoriteCountriesContainerComponent } from './containers/favorite-countries-container/favorite-countries-container.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesListContainerComponent,
  },
  {
    path: 'favorites',
    component: FavoriteCountriesContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
