import { WeatherService } from '../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  title = 'Washington, DC';
  res = null;
  constructor(private _weather: WeatherService) {
    this._weather.getWeather('washington dc',this.res);
  }

  ngOnInit() {
  }

}
