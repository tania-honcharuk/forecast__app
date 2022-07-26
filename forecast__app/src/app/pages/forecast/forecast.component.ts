import { ForecastData } from './../../models/ForecastData.model';
import { StorageService } from './../../services/storage.service';
import { ForecastService } from './../../services/forecast.service';
import { Component, OnInit, Input } from '@angular/core';
import { ForecastDetails } from '../../models/ForecastDetails.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecastData!: ForecastData;
  displayForecastData = true;
  //logZip!: number;
  logArr: Array<number> = [];
  numbers: Array<number> = [];

  @Input() todo!: number;
  test!: number;

  constructor(
    private forecastService: ForecastService,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.storageService.name.subscribe(data =>{
      this.test = Number(data)
    })

    console.log(this.test)

    this.forecastService.LoadForecastWeather(this.test).subscribe(
      res => {
        this.forecastData = new ForecastData();
        this.forecastData.name = res.city.name;
        for (let i = 7; i < res.list.length; i = i + 8) {
          let details = new ForecastDetails();
          details.date = res.list[i].dt_txt;
          details.maxTemperature = Math.round(res.list[i].main.temp_max);
          details.minTemperature = Math.round(res.list[i].main.temp_min);
          details.description = res.list[i].weather[0].description;
          details.icon = "http://openweathermap.org/img/wn/" + res.list[i].weather[0].icon + "@2x.png";

          this.forecastData.details.push(details);

        }
      }
    )

    this.numbers = Array(5).fill(0).map((x, i) => i);
  }


}
