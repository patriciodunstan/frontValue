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

  newsItems = [
    { image: 'url1', title: 'News 1', summary: 'Summary 1', date: '2024-01-01' },
    { image: 'url2', title: 'News 2', summary: 'Summary 2', date: '2024-02-01' }
  ];

  onCompanySelected(companyName: string) {
    console.log(`Selected Company: ${companyName}`);
  }

}
