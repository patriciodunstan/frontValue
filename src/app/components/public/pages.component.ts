import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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

  constructor(private cdr: ChangeDetectorRef, private router: Router, private breakpointObserver: BreakpointObserver) {
  
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      console.log('Breakpoint result:', result);
      console.log('Breakpoint result.matches:', result.matches);
      if (result.matches) {
        this.router.navigate(['/not-found']);
      }
    });
  }

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
