import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'table', component: TableComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
