import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import {HomeComponent} from './home/home.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path: 'main', component: HomeComponent},
  {path: 'new', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
