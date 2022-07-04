import { Component, OnInit } from '@angular/core';
import { MyWeatherLibService } from './my-weather-lib.service';

@Component({
  selector: 'mwl-my-weather-lib',
  template: `
    <div>
      <p>Weather in: {{weatherData?.name}} </p>
      <p>Temp:  {{weatherData?.main?.temp}}</p>
    </div>
  `,
  styles: [
  ]
})
export class MyWeatherLibComponent implements OnInit {

  weatherData: any; 

  constructor(private weatherService: MyWeatherLibService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherUpdates()
      .subscribe( (res: any) => {
        console.log(res);
        this.weatherData = res;
      });
  }

}
