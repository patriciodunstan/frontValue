import { Component, Input } from '@angular/core';
import { Charts, ChartSeries, NewsItem } from '../../../models/mock.interface';
import { DataMockService } from '../../../service/dataMock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  chartsData: { title: string; data: any; type: string }[] = [];
  newsItems: NewsItem[] = [];

  constructor(private dataMockService: DataMockService) { }

  ngOnInit() {
    this.dataMockService.getMockData().subscribe((data: any) => {
      this.prepareChartsData(data.charts);
      this.newsItems = data.news;
    });
  }

  private prepareChartsData(charts: Charts): void {
    this.chartsData = [
      {
        title: 'Dividend Yield vs P/E Ratio',
        type: 'line',
        data: {
          labels: charts.stockPerformance.categories,
          datasets: charts.stockPerformance.series.map((series: ChartSeries) => ({
            label: series.name,
            data: series.data,
            borderColor: series.name === 'Dividend Yield' ? '#42A5F5' : '#FFA726',
            fill: false
          }))
        }
      },
      {
        title: 'Market Growth by Sector',
        type: 'bar',
        data: {
          labels: charts.marketTrends.categories,
          datasets: charts.marketTrends.series.map((series: ChartSeries) => ({
            label: series.name,
            data: series.data,
            backgroundColor: '#66BB6A'
          }))
        }
      }
    ];
  }
    
}
