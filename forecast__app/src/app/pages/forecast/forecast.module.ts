import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    ForecastRoutingModule
  ],
  exports: [ForecastComponent]
})
export class ForecastModule { }
