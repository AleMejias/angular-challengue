import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren : () => import('./home/home.module').then(( home ) => home.HomeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(( users ) => users.UsersModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
