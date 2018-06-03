import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class WeatherService {
  weather = {
  	humidity: '',
  	tempAvg: '',
  	tempHi: '',
  	tempLo: '',
  	status: ''
  }
  constructor(private _http: Http) { }

  getWeather(name,res){
    var key = '40627eb133b17e27d143697f419b6ec2'
  	var u = 'http://api.openweathermap.org/data/2.5/weather?q=' +
      name + '&&appid=' + key;
    // http://api.openweathermap.org/data/2.5/weather?q=San%20jose,US&&appid={{key}}
  	console.log('looking for ' + u);
  	this._http.get(u).subscribe(
  		(response) => {
				res = response.json();
				console.log(res);
  			this.weather.humidity = res.main.humidity;
        this.weather.tempAvg = res.main.temp;
        this.weather.tempHi = res.main.temp_max;
        this.weather.tempLo = res.main.temp_min;
        this.weather.status = res.weather[0].description;
  		},
  		(err)=> {
        	console.log(err);
  		});
  }
}
