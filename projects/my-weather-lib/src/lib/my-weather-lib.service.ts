import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyWeatherLibService {

  REST_API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=0d0a354784e8166b7b9fee6a3a29bcc2';

  constructor(private http: HttpClient ) { }

  getWeatherUpdates(): any {
    console.log('Inside getWeatherUpdates of WeatherService');

    return this.http.get(this.REST_API_URL)
        .pipe( map((res: any) => {
          console.log(res);
          return res;
        }));
  }
}