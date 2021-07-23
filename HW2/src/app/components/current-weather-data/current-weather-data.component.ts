import {Component, Input} from '@angular/core';
import {JsonPlaceholderService} from "@app-common/services/json-placeholder.service";
import {CurrentWeather} from "@app-common/services/interfaces/current-weather/current-weather.interface";



@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather-data.component.html',
  styleUrls: ['./current-weather-data.component.css']
})
export class CurrentWeatherDataComponent {
  @Input() currentWeather!: CurrentWeather;

  constructor(private readonly jsonPlaceholderService: JsonPlaceholderService) {
  }


  addTMP(){

  }

}
