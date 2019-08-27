import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mh-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentWeather: any;

  constructor() {
  }
  
  ngOnInit() {
  }



}
  