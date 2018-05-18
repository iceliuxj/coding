import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  pet: any;
  message = '';
  errors = {
    name: '',
    type: '',
    desp: '',
  };

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) {
    this.save();
  }

  ngOnInit() {
  }
  save() {
    this.pet = {
      name: '',
      type: '',
      desp: '',
      skill: '',
      skill2: '',
      skill3: '',
    };
  }
  addPet() {
    const temp = this._httpService.addNew(this.pet);
    temp.subscribe(data => {
      this.message = data['message'];
      if (data['message'] === 'Success') {
        this.message = ': ' + this.pet.name + 'was added!';
        this.save();
        this.goHome();
      } else {
        console.log(`errors happened when add new pet`);
        console.log (data['error'].errors);
        this.errors = {
          name: '',
          type: '',
          desp: ''};
        if (data['error'].errors['name']) {
          this.errors.name = data['error'].errors['name'];
        }
        if (data['error'].errors['type']) {
          this.errors.type = data['error'].errors['type'];
        }
        if (data['error'].errors['desp']) {
          this.errors.desp = data['error'].errors['desp'];
        }
      }
    });
  }

  goHome() {
    this._router.navigate(['/']);
  }
}
