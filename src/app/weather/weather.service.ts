import { Injectable } from '@angular/core';
<<<<<<< 4e669ae9c0df73f4444693c715d81c7b8f46f4c7
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

=======
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Location } from "../location";
>>>>>>> start bookmark dev
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getCurrentWeather(location: string) {
    return this.http.get(API_URL + `weather?q=${location}&units=metric&appid=7427b028cf8c2d818dc843e074039a4a`);
  }

<<<<<<< 4e669ae9c0df73f4444693c715d81c7b8f46f4c7
=======
  // getLocationWeather() {
  //   return this.http.get(API_URL + `weather?q=${location}&units=metric&appid=7427b028cf8c2d818dc843e074039a4a`)
  //     .map((res: Response) => res.json().response)
  //     }

  // }
>>>>>>> start bookmark dev
}
