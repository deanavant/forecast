import { WeatherService } from '../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  title = 'San Jose';
  res = null;
  constructor(private _weather: WeatherService) { 
    this._weather.getWeather('san jose',this.res);
  }

  ngOnInit() {
  }

}
