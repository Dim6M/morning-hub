import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'mh-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentWeather: any;
  location: string;

  constructor(private weatherService: WeatherService) {
  }
  ngOnInit() {
  }

  displayWeather(location: string) {
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(location)
      .subscribe((res: any) => {
        this.currentWeather = res;
      });
  }


}
