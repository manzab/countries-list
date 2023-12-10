import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListContainerComponent } from './containers/countries-list-container/countries-list-container.component';
import { FavoritesListContainerComponent } from './containers/favorites-list-container/favorites-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesListContainerComponent,
  },
  {
    path: 'favorites',
    component: FavoritesListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
