import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';


import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '', outlet: 'pages', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,

  ],
  exports: [ HomeComponent]
})
export class HomeModule { }
