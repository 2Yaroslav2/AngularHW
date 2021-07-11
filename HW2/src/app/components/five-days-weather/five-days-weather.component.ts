import {Component, Input} from '@angular/core';
import {JsonPlaceholderService} from "@app-common/services/json-placeholder.service";
import {ListWeatherInfo} from "@app-common/services/interfaces/five-days-weather/list-weather";
import {FiveDaysWeather} from "@app-common/services/interfaces/five-days-weather/five-days-weather.interface";

@Component({
  selector: 'app-five-days-weather',
  templateUrl: './five-days-weather.component.html',
  styleUrls: ['./five-days-weather.component.css']
})
export class FiveDaysWeatherComponent {

  // @Input() fiveDaysWeather!: FiveDaysWeather;
  @Input() fiveDaysWeather!: ListWeatherInfo;

  constructor(private readonly jsonPlaceholderService: JsonPlaceholderService) {

  }

}
