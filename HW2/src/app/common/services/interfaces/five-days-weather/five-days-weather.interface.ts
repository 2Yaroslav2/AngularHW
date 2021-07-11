import {ListWeatherInfo} from "@app-common/services/interfaces/five-days-weather/list-weather";
import {City} from "@app-common/services/interfaces/five-days-weather/city";


export interface FiveDaysWeather {
  list: ListWeatherInfo[],
  city: City

}
