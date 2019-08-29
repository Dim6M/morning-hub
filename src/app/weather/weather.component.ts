import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { FavLocation } from '../fav-location';

@Component({
  selector: 'mh-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentWeather: any;
  location: string;
  favLocation: FavLocation;

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

  bookMarkLocation(location: string) {
    this.weatherService.getLocationWeather(location)
      .subscribe((data: FavLocation) => this.favLocation = {
        location: (data as any).name,
        temperature: (data as any).main.temp
      });
    console.log(this.favLocation);
  }

}
