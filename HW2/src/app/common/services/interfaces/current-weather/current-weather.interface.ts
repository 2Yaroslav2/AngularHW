import {Weather} from "@app-common/services/interfaces/for-everything-weather/weather.interface";
import {Main} from "@app-common/services/interfaces/for-everything-weather/main.interface";
import {Wind} from "@app-common/services/interfaces/for-everything-weather/wind.interface";
import {Clouds} from "@app-common/services/interfaces/current-weather/clouds.interface";
import {Sys} from "@app-common/services/interfaces/current-weather/sys.interface";


export interface CurrentWeather {
  weather: Weather[],
  main: Main,
  wind: Wind,
  rain: string,
  snow: string,
  clouds: Clouds,
  sys: Sys,
  timezone: number,
  name: string,

}
