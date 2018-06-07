import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})
export class AddquoteComponent implements OnInit {
  author: any;
  quote: any;
  id: any;
  name: any;
  message: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) {
    this._routes.params.subscribe((params: Params) => {
      console.log(`this is addquote page to get id`);
      console.log( params['id']);
      this.id = params['id'];
    });
    this.author = '';
    this.quote = '';
    this.message = [];
  }

  ngOnInit() {
    this.getAuthor();
    this.addQuote();
  }
  getAuthor() {
  const temp = this._httpService.getUser(this.id);
      temp.subscribe(data => {
        this.author = data;
      });
  }

  addQuote() {
    const temp = this._httpService.addQuote({id: this.id}, {quote: this.quote});
    temp.subscribe (data => {
      if (data['errors']) {
        this.message = data ['message'];
      }
      else {
        this._router.navigate['/'];
      }
    });
  }
}
