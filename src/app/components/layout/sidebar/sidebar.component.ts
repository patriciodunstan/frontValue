import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataMockService } from '../../../service/dataMock.service';
import { Charts } from '../../../models/mock.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  sidebarVisible: boolean = false;
  companies: string[] = [];


  constructor(private dataMockService: DataMockService) { }


  ngOnInit() {
    this.dataMockService.getMockData().subscribe((data: { charts: Charts }) => {
      this.companies = data.charts.stockPerformance.categories;
    });
  }

}
