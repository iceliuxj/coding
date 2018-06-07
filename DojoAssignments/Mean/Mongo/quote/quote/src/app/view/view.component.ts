import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  author: any;
  quote: any;
  name: any;
  id: any;
  vote: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) {
    this._routes.params.subscribe((params: Params) => {
      console.log(params);
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.getAuthor();
    this.id;
    this.quote = [];
    this.vote;

    const quote = this._httpService.viewQuotes(this.id);
    quote.subscribe(data => {
      this.name = this.author['name'];
      this.quote = this.author['quote'];
      this.vote = this.quote['vote'];
    });
  }
    getAuthor() {
        const temp = this._httpService.getUser(this.id);
        temp.subscribe(data => {
          this.author = data;
          this.quote = this.author.quote;
      });
    }

}
