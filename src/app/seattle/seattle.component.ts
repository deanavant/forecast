import { WeatherService } from '../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  title = 'Seattle, WA';
  res = null;
  constructor(private _weather: WeatherService) {
  	this._weather.getWeather('seattle',this.res);
   }

  ngOnInit() {
  }
  
}
