import {Main} from "@app-common/services/interfaces/for-everything-weather/main.interface";
import {Weather} from "@app-common/services/interfaces/for-everything-weather/weather.interface";
import {Wind} from "@app-common/services/interfaces/for-everything-weather/wind.interface";


export interface ListWeatherInfo {
  main: Main,
  weather: Weather[],
  wind: Wind,
  dt_txt: string
}
