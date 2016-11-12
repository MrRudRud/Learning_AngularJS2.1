import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import forms modules to recognize <input>
import { FormsModule }   from '@angular/forms';
 
import { AppComponent }  from './app.component';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule //Forms
  ],

  declarations: [ AppComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
