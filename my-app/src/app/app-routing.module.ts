import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './gridList/card/card.component'

const routes: Routes = [
  { path: '',
    redirectTo: '/card',
    pathMatch: 'full'
  },
  {
    path: 'card',
    component: CardComponent
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // },
];

export const AppRoutes = RouterModule.forRoot(routes);
