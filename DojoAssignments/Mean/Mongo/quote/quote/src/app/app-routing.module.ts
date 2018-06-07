import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import {HomeComponent} from './home/home.component';
import {EditComponent} from './edit/edit.component';
import {ViewComponent} from './view/view.component';
import { AddquoteComponent } from './addquote/addquote.component';

const routes: Routes = [
  {path: 'main', component: HomeComponent},
  {path: 'newauthor', component: AddComponent},
  {path: 'newquote/:id', component: AddquoteComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'view/:id', component: ViewComponent},
  {path: '', pathMatch: 'full', redirectTo: '/main' },
  {path: '**', redirectTo: '/main' }
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
