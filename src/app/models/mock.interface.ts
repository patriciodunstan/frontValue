export interface ChartSeries {
    name: string;
    data: number[];
}

export interface Chart {
    series: ChartSeries[];
    categories: string[];
}

export interface Charts {
    stockPerformance: Chart;
    marketTrends: Chart;
}

export interface NewsItem {
    image: string;
    title: string;
    summary: string;
    date: string;
}

export interface MockData {
    charts: Charts;
    news: NewsItem[];
}