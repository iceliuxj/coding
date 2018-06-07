import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  name: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = {name: ''};
    this._routes.params.subscribe(data => {
      console.log(data);
      this.id = data.id;
    });
  }

  updateUser() {
    const temp = this._httpService.updateUser(this.id, this.name);
    temp.subscribe(data => {
      console.log(data);
    });
  }
}
