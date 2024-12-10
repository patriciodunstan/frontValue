import {Component } from '@angular/core';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {


  constructor(
  ){

  }

  companies = [
    { name: 'Company A' },
    { name: 'Company B' },
    { name: 'Company C' }
  ];

  chartOptions = {
    series: [/* data */],
    chart: { type: 'line' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar'] },
    title: { text: 'Stock Performance' }
  };

  trendOptions = {
    series: [/* data */],
    chart: { type: 'bar' },
    xaxis: { categories: ['Trend A', 'Trend B', 'Trend C'] },
    title: { text: 'Market Trends' }
  };



  onCompanySelected(companyName: string) {
    console.log(`Selected Company: ${companyName}`);
  }

}
