import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DataMockService } from '../../../service/dataMock.service';
import { Charts } from '../../../models/mock.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  companies: string[] = [];
  isMobile = false;
  isOpen = true;
  @Output() menuToggle = new EventEmitter<void>();

  menuItems = [
    { path: 'home', icon: 'home', label: 'Home' },
    { path: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: 'reports', icon: 'assessment', label: 'Reportes' }
  ];

  constructor(
    private dataMockService: DataMockService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      this.isMobile = result.matches;
      this.isOpen = !this.isMobile;
    });
  }

  ngOnInit() {
    this.dataMockService.getMockData().subscribe((data: { charts: Charts }) => {
      this.companies = data.charts.stockPerformance.categories;
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit();
  }
}
