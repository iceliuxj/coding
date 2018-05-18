import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet: any;
  message = '';
  errors = {
    name: '',
    type: '',
    desp: ''
  };
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.pet = {
      name: '',
      type: '',
      desp: '',
      skill: '',
      skill2: '',
      skill3: ''
    };
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
    });
  }
  getPet(id) {
    const temp = this._httpService.getOne(id);
    temp.subscribe(data => {
      if (data['message'] === 'Success') {
      this.pet = data['data'][0];
    } else {
      console.log(data);
    }
    });
  }

  editPet() {
    const temp = this._httpService.update(this.pet._id, this.pet);
    console.log(this.pet._id);
    temp.subscribe(data => {
      this.message = data['message'];
      if (data['message'] === 'Success') {
        this.message = ': ' + this.pet.name + ' successfully updated!';
        this.goHome();

      } else {
        console.log(data['error'].errors);
        this.errors = {name: '',
          type: '',
          desp: ''};
        if (data['error'].errors['name']) {
          this.errors.name = data['error'].errors['name'];
        }
        if (data['error'].errors['type']) {
          this.errors.type = data['error'].errors['type'];
        }
        if (data['error'].errors['description']) {
          this.errors.desp = data['error'].errors['description'];
        }
      }
    });
  }

  goHome() {
    this._router.navigate(['/detail/' + this.pet._id]);
  }
}
