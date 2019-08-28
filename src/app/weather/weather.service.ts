import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getCurrentWeather(location: string) {
    return this.http.get(API_URL + `weather?q=${location}&units=metric&appid=7427b028cf8c2d818dc843e074039a4a`);
  }

 
}
