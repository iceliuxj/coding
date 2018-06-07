import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    console.log(`this is the service`);
   }

   getUsers() {
    return this._http.get('/main');
   }

   addUser(data) {
     console.log(data);
     console.log(`you tried to add a new author`);
     return this._http.post('/new', data);
   }

   updateUser(id, data) {
    return this._http.put('/edit/' + id, data);
   }

   deleteUser(id) {
     return this._http.delete('/delete/' + id);
   }

}
