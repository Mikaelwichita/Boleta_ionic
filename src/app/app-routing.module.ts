import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./eventos/eventos.module').then(m => m.EventosPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then(m => m.CuentaPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
