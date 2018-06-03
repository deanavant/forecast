import { WeatherService } from '../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  title = 'Chicago, IL';
  res = null;
  constructor(private _weather: WeatherService) {
    this._weather.getWeather('chicago',this.res);
  }

  ngOnInit() {
  }

}
