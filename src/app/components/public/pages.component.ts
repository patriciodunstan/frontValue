import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  menuShow: boolean = true;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.sidenav) {
        this.sidenav.open();
        this.cdr.detectChanges();
      }
    });
  }

  toggleSidenav() {
    this.menuShow = !this.menuShow;
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  getState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
