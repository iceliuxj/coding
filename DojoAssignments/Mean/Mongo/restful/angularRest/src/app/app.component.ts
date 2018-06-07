import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks: any;
  newtask = {
    title: '',
    description : ''
  };

  constructor(private _httpService: HttpService) {
    this.tasks = [
      {title: 'bob', description: 'rob', completed: 'false'},
      {title: 'bob', description: 'b2', completed: 'false'},
      {title: 'bob', description: 'john', completed: 'true'}
  ];
  }

  getStuff() {
    console.log(`working`);
    const tempObservable = this._httpService.getStuff().subscribe(data => {
      this.tasks = data;
    });
  }

  newTaskForm() {
    const tempObservable = this._httpService.createTask(this.newtask);
    tempObservable.subscribe(data => {
      console.log(`subcribed to newTaskForm`);
      this.getStuff();
    });
  }
}
