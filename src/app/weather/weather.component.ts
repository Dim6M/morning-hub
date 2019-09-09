import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherLocation } from '../weather-location';

@Component({
  selector: 'mh-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentWeather: any;
  location: string;
  weatherLocation: WeatherLocation;
  locations: WeatherLocation[] = [];

  constructor(private weatherService: WeatherService) {
  }
  ngOnInit() {
  }

  /* displayWeather(location: string) {
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(location)
      .subscribe((res: any) => {
        this.currentWeather = res;
      });
  } */

  getLocationWeather(location: string) {
    this.weatherService.getLocationWeather(location)
      .subscribe((data: WeatherLocation) => this.weatherLocation = {
        location: (data as any).name,
        temperature: (data as any).main.temp,
        description: (data as any).weather[0].main,
        icon: (data as any).weather[0].icon
      });
  }

  bookMarkLocation() {
    if (this.weatherLocation) {
      this.locations.push(this.weatherLocation);
    }
    console.log(this.locations);

  }

}
