import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { FullComponent } from './layouts/full/full.component';
 //import { ProducedetailsComponent} from './home/producedetails/producedetails.component'

export const Approutes: Routes = [
  {
    path: '',
    //component: FullComponent,
    children: [
      { path: '', redirectTo: 'index.html', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },

      {
        path: 'index.html',
        loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule)
      },

      {
        path: 'details',
        loadChildren: () => import('./home/producedetails/product.module').then(m => m.ProductDetailsModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
