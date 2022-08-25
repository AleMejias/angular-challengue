import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class HomeModule { }
