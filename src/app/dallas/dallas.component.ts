import { WeatherService } from '../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  title = "Dallas, TX";
  res = null;
  constructor(private _weather: WeatherService) {
    this._weather.getWeather('dallas',this.res);
  }

  ngOnInit() {
  }

}
