import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyWeatherLibModule } from 'my-weather-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyWeatherLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
