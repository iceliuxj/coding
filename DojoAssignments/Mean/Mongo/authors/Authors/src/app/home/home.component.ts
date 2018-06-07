import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: any;
  id: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) {
    this.name = {name : ''};
    this._routes.params.subscribe(data => {
      console.log(data);
      this.id = data.id;
    });
  }

  ngOnInit() {
    const user = this._httpService.getUsers();
    user.subscribe(data => {
      this.name = data;
    });
  }

  addUser() {
    this._httpService.addUser({name: this.name});
  }

  deleteUser(id) {
    console.log(id);
    const temp = this._httpService.deleteUser(id);
    temp.subscribe(data => {
      console.log(data);
    });
  }
}
