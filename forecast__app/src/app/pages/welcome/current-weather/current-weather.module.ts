import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { CurrentWeatherRoutingModule } from './current-weather-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CurrentWeatherComponent]
})
export class CurrentWeatherModule { }
