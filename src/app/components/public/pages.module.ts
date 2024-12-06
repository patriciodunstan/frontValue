import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';



import { HeaderModule } from "../layout/header/header.module";
import { SidebarModule } from '../layout/sidebar/sidebar.module';
import { HomeModule } from './home/home.module';




// routing
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      {
        path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: { animation: 'home' }
      },
    ]
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },





];
@NgModule({
  declarations: [PagesComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HeaderModule,
    SidebarModule,
    HomeModule
  ],
  providers: [],
  exports: [PagesComponent]
})
export class PagesModule {
}
