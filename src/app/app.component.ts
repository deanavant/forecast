import { WeatherService } from './weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Weather Forecast';
  res = null;
  constructor(private _weather: WeatherService) {}

  getWeather(){
  	console.log('getWeather clicked');
  	this._weather.getWeather('seattle',this.res);
  }
}
