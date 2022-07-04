import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MyWeatherLibComponent } from './my-weather-lib.component';



@NgModule({
  declarations: [
    MyWeatherLibComponent
  ],
  imports: [
    CommonModule, // for binding 
    HttpClientModule // for http calls
  ],
  exports: [
    MyWeatherLibComponent
  ]
})
export class MyWeatherLibModule { }
