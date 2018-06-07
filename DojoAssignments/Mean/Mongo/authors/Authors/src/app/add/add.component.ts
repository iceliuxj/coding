import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = {name: ''};
  }
  addUser(data) {
    const temp = this._httpService.addUser(this.name)
    temp.subscribe(data => {
      this._router.navigate(['/main']);
    });
  }
}
