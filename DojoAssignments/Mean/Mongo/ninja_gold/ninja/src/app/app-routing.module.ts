import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubNinjaComponent} from './sub-ninja/sub-ninja.component';
import {ScoreComponent} from './score/score.component';

const routes: Routes = [
  {path: 'ninja', component: SubNinjaComponent},
  {path: 'score', component: ScoreComponent},
];

@NgModule({
  exports: [
    RouterModule,
  ],

  imports: [
    RouterModule.forRoot(routes)
  ]

})
export class AppRoutingModule { }
