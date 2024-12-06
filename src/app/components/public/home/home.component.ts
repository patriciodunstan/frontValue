import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() chartOptions: any;
  @Input() trendOptions: any;
  @Input() newsItems: { image: string; title: string; summary: string; date: string }[] = [];
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
    this.trendOptions = {
      series: [],
      chart: {},
      xaxis: {},
      title: {}
    };
  }
}
