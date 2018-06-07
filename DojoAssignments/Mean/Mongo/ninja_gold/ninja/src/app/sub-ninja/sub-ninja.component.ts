import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sub-ninja',
  templateUrl: './sub-ninja.component.html',
  styleUrls: ['./sub-ninja.component.css']
})
export class SubNinjaComponent implements OnInit {
  totalGold: any;
  message: any;
  scores: any;
  user: any;
  result: any;
  constructor(private _httpService: HttpService) {
    this.totalGold = 0;
    this.message = [];
    this.scores = [];
    this.user = '';
    this.result = '';

}
  ngOnInit() {
    const bob = this._httpService.getScores();
    bob.subscribe(data => {
      this.scores = data;
    });
  }

  addScore() {
    this._httpService.addScore({user: this.user, score: this.totalGold}).subscribe(data => {
      if (data['status'] === 'Not good') {
      this.result = data['errors'];
    }
  });
}

  process(type, min, max) {
    console.log(type, min, max);
    const randNum = Math.floor(Math.random() * max) + min;
    this.totalGold += randNum;
    this.message.push (`You went to the ${type} and earned ${randNum} gold`);
  }

}
