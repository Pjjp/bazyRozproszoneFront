import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './gridList/card/card.component'
import { ClientComponent } from './gridList/client/client.component'
import { ProductComponent } from './gridList/product/product.component'

const routes: Routes = [
  { path: '',
    redirectTo: '/card',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'clients',
    component: ClientComponent
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // },
];

export const AppRoutes = RouterModule.forRoot(routes);
