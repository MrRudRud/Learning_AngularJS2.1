import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import forms modules to recognize <input>
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule //Forms for <input>
  ],

  declarations: [
    AppComponent,
    HeroDetailComponent
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
