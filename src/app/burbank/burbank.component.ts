import { WeatherService } from '../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  title = "Burbank, CA";
  res = null;
  constructor(private _weather: WeatherService) {
    this._weather.getWeather('burbank',this.res);
  }

  ngOnInit() {
  }

}
