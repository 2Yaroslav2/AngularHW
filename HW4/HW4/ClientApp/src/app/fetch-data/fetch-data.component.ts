import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts$: Observable<WeatherForecast[]>;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.forecasts$ = http.get<WeatherForecast[]>(baseUrl + 'weatherforecast');
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
