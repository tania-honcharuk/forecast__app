import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  host = "https://api.openweathermap.org/data/2.5/";

  constructor(private http: HttpClient) { }

  LoadForecastWeather(zip: number): Observable<any> {
    return this.http.get(`${this.host}/forecast`, {
      params: {
        zip: zip + ',us',
        appid: 'dabc2b57d81c4493c08ab63bb4d9e326',
        units: 'imperial'
      }
    })
  }

  LoadCurrentWeather(zip: number): Observable<any> {
    return this.http.get(`${this.host}/weather`, {
      params: {
        zip: zip + ',us',
        appid: 'dabc2b57d81c4493c08ab63bb4d9e326',
        units: 'imperial'
      }
    })
  }

}