import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {
  private mockData = require('../../assets/mock-data.json');  

  constructor(private http: HttpClient) { }

  getMockData() {
    return of(this.mockData);
  }
}
