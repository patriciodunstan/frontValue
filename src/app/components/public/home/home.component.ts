import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ChartModule } from 'primeng/chart';
import { Charts, ChartSeries, NewsItem } from '../../../models/mock.interface';
import { DataMockService } from '../../../service/dataMock.service';

// Definir el tipo para los charts
type ChartType = 'bar' | 'line' | 'scatter' | 'bubble' | 'pie' | 'doughnut' | 'polarArea' | 'radar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ChartModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('lineChart') lineChart!: ElementRef;
  @ViewChild('barChart') barChart!: ElementRef;

  chartsData: { title: string; data: any; type: ChartType; options: any }[] = [];
  newsList: NewsItem[] = [];

  constructor(private dataMockService: DataMockService) { }

  ngOnInit() {
    this.dataMockService.getMockData().subscribe((data: any) => {
      this.prepareChartsData(data.charts);
      this.newsList = data.news;
    });
  }

  private prepareChartsData(charts: Charts): void {
    const chartOptions = {
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      responsive: true,
      maintainAspectRatio: false
    };

    this.chartsData = [
      {
        title: 'Dividend Yield vs P/E Ratio',
        type: 'line' as ChartType,
        options: chartOptions,
        data: {
          labels: charts.stockPerformance.categories,
          datasets: charts.stockPerformance.series.map((series: ChartSeries) => ({
            label: series.name,
            data: series.data,
            borderColor: series.name === 'Dividend Yield' ? '#42A5F5' : '#FFA726',
            tension: 0.4,
            fill: false
          }))
        }
      },
      {
        title: 'Market Growth by Sector',
        type: 'bar' as ChartType,
        options: chartOptions,
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
