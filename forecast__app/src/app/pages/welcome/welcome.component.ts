import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ForecastData } from '../../models/ForecastData.model';
import { WeatherData } from '../../models/weatherData.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  zipArr: Array<number> = [];
  zipCode!: number;
  logArr: Array<number> = [];
  showCurrent: boolean = false;
  weatherDetails: WeatherData = new WeatherData();
  forecastData!: ForecastData;

  constructor(
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    if(this.logArr.length > 0) {
      this.displayCurrent()
    }
  }

  addZipCode() {
    this.zipArr.push(this.zipCode);
    this.storageService.set('zipCode', this.zipArr);
  }

  displayCurrent() {
    this.showCurrent = true;
    this.logArr = this.storageService.get('zipCode');
  }
}
