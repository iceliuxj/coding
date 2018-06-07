import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    console.log('this is the server');
   }

  getScores() {
    return this._http.get('/top10');
  }

  addScore(data) {
    console.log(data);
    console.log(`you tried to add score`);
    return this._http.post('/scores', data);
  }
}
