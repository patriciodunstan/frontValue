import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { ChartModule } from 'primeng/chart';
import { Carousel, CarouselModule } from 'primeng/carousel';


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
    ChartModule,
    CarouselModule
  ],
  exports: [ HomeComponent]
})
export class HomeModule { }
