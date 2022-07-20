import { StorageService } from './../../../services/storage.service';
import { WeatherData } from './../../../models/weatherData.model';
import { ForecastService } from './../../../services/forecast.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() todo!: number;

  @Output() deleteClick: EventEmitter<void> = new EventEmitter()
  // @Input() zipCode!: number;
  logZip!: number;
  // logArr: Array<number> = [];
  weatherDetails: WeatherData = new WeatherData();
  displayForecast: boolean = false;

  constructor(
    private forecastService: ForecastService,
    private storageService: StorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.logZip = this.todo;
    this.forecastService.LoadCurrentWeather(this.todo).subscribe(
      res => {
        this.weatherDetails.cityName = res.name;
        this.weatherDetails.description = res.weather[0].description;
        this.weatherDetails.currentTemperature = Math.round(res.main.temp);
        this.weatherDetails.icon = "http://openweathermap.org/img/wn/" + res.weather[0].icon + ".png";
        this.weatherDetails.maxTemperature = Math.round(res.main.temp_max);
        this.weatherDetails.minTemperature = Math.round(res.main.temp_min);
      }
    )
  }

  onDeleteClick() {
    this.deleteClick.emit()
  }

  displayWeatherForecast() {
    this.displayForecast = true;
    this.router.navigateByUrl(`/forecast/${this.todo}`);
    this.storageService.changeName(this.todo.toString())
  }
}
