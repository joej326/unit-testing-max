import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ServerService {

  

  constructor(private http: HttpClient) { }


  getWeather(){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=a6c45a3b8b1f377d5bcdc4ecde68b577');
  }

}


