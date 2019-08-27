import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'mh-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentWeather: any;

  constructor(private weatherService: WeatherService) {
    this.displayWeather();
  }
  
  ngOnInit() {
  }

  displayWeather(){
    this.currentWeather = {};
    this.weatherService.getCurrentWeather("Paris").subscribe((res: any) => {
      this.currentWeather = res;
    });
  }



}
  