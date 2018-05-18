import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll() {
    return this._http.get('/home');
  }

  addNew(data) {
    return this._http.post('/new', data);
  }

  getOne(id) {
    return this._http.get('/detail/' + id);
  }

  like(id) {
    console.log(id);
    return this._http.post('/detail/' + 'like/' + id, {});
  }

  update(id, data) {
    return this._http.put('/edit/' + id, data);
  }

  remove(id) {
    console.log(`called remove in http.service`);
    console.log(id);
    return this._http.delete('/detail/' + id);
  }
}

