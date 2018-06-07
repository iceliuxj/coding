import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubNinjaComponent } from './sub-ninja/sub-ninja.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    SubNinjaComponent,
    UserComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
