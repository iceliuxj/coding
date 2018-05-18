import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  pets: any;
  petdetail: any;
  petedit: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    const temp = this._httpService.getAll();
    temp.subscribe (data => {
      console.log(data);
      this.pets = data;
      console.log(data['_id']);
    });
  }
}

