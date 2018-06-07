import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
  }
  // getTasks() {
  //   console.log('here is getTask()');
  //   const tempObservable = this._http.get('/tasks');
  //   tempObservable.subscribe(data => {this.data = data});
  // }

  getStuff(){
    console.log('this is from Http.service');
    return this._http.get('/tasks')
  }

  createTask(newTaskData) {
    return this._http.post("/tasks", newTaskData);
  }
}


