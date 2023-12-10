import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListContainerComponent } from './containers/countries-list-container/countries-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesListContainerComponent,
    data: {
      title: 'Countries list',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
