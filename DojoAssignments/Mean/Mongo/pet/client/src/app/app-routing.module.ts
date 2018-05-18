import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'new', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'detail/:id', component: DisplayComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
