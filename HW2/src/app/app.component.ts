import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JsonPlaceholderService} from "./common/services/json-placeholder.service";

import {Observable} from "rxjs";
import {CurrentWeather} from "@app-common/services/interfaces/current-weather/current-weather.interface";
import {FiveDaysWeather} from "@app-common/services/interfaces/five-days-weather/five-days-weather.interface";
import {ListWeatherInfo} from "@app-common/services/interfaces/five-days-weather/list-weather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW2';

  curWeather: boolean = false;
  weatherByHours: boolean = false;

  btnCurrentWeather: string = 'Show current-weather';
  btnFiveDaysWeatherByHours: string = 'Show five-days-weather by hours';

  currentWeather$!: Observable<CurrentWeather[]>;

  fiveDaysWeather$!: Observable<ListWeatherInfo[]>;
  //fiveDaysWeather$!: Observable<FiveDaysWeather[]>;

  constructor(private readonly jsonPlaceholderService: JsonPlaceholderService) {
  }

  ngOnInit(): void{

    this.currentWeather$ = this.jsonPlaceholderService.getCurrentAllWeatherByCity("Kiev");

    this.fiveDaysWeather$ = this.jsonPlaceholderService.getFiveDaysAllWeatherByCity("Kiev");

  }

  onBtnCurWeatherClick() {
    if(this.curWeather) {
      this.btnCurrentWeather = 'Show current-weather';
      this.curWeather = false;
    }
    else {
      this.btnCurrentWeather = 'Hide current-weather';
      this.curWeather = true;
    }
  }

  onBtnWeatherByHoursClick() {
    if(this.weatherByHours) {
      this.btnFiveDaysWeatherByHours = 'Show five-days-weather by hours';
      this.weatherByHours = false;
    }
    else {
      this.btnFiveDaysWeatherByHours = 'Hide five-days-weather by hours';
      this.weatherByHours = true;
    }
  }

}
