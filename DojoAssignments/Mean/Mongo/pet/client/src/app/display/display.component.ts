import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  pet: any;
  ifLiked: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
    });
  }

  getPet (id) {
    const temp = this._httpService.getOne(id);
    temp.subscribe(data => {
      if (data['message'] === 'Success') {
        console.log(data);
        this.pet = data['data'][0];
      } else {
        console.log(data);
      }
    });
  }

  onLikes() {
    console.log(`clicked`);
    const temp = this._httpService.like(this.pet._id);
    temp.subscribe(data => {
      console.log(`try to like`);
      console.log(data);
      console.log(data['message']);
      if (data['message'] === 'Success') {
        this.pet = data['data'];
        this.ifLiked = true;
        console.log('liked +1');
      } else {
        console.log(`fail to like`);
      }
    });
  }

  Adopt() {
    console.log(`adopt clicked`);
    console.log(this.pet._id);
    const temp = this._httpService.remove(this.pet._id);
    temp.subscribe(data => {
      console.log (data);
      this.goHome();
    });
  }

  goHome() {
    this._router.navigate(['/']);
  }
}
