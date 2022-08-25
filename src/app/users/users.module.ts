import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';

import { TableComponent } from './components/table/table.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    TableComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
