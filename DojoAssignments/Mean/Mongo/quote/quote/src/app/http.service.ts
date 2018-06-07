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
   } //this is get all authors' info from db

   getUser(id) {
    return this._http.get('/view/' + id);
   } //this is get single author's info from db

   addUser(data) {
     console.log(data);
     console.log(`you tried to add a new author`);
     return this._http.post('/newauthor', data);
   }

   addQuote(id, data) {
    console.log(id);
    console.log(data);
    console.log(`you tried to add a new quote(http.service)`);
    return this._http.post('/newquote/' + id, data);
  }

   updateUser(id, data) {
    return this._http.put('/edit/' + id, data);
   }

  //  deleteUser(id) {
  //    return this._http.delete('/delete/' + id);
  //  }

   viewQuotes(id) {
     return this._http.get('/view/' + id);
   }

}
