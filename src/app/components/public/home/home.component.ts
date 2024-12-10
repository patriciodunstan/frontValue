import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() chartOptions: any;
  @Input() trendOptions: any;
   newsItems: { image: string; title: string; summary: string; date: string }[] = [];
  constructor() {

    this.chartOptions = {
      series: [{
        name: 'Stock Value',
        data: [10, 20, 30, 40, 50]
      }],
      chart: {
        type: 'line',
        height: 350
      },
      title: {
        text: 'Stock Performance',
        align: 'center'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
      }
    };

    this.newsItems = [
      { image: 'url1', title: 'News 1', summary: 'Summary 1', date: '2024-01-01' },
      { image: 'url2', title: 'News 2', summary: 'Summary 2', date: '2024-02-01' }
    ];
    this.trendOptions = {
      series: [/* data */],
      chart: { type: 'bar' },
      xaxis: { categories: ['Trend A', 'Trend B', 'Trend C'] },
      title: { text: 'Market Trends' }
    };

  }
}
