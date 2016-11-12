import { Component } from '@angular/core';

export class Hero{
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div>
      <label>id:</label>{{hero.id}}
      <div>
        <label>name:</label>{{hero.name}}
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>`
})

export class AppComponent {

  //title & hero are properties
  title = 'Tour of Heroes';
  // hero = 'Windstrom';

  hero: Hero = {
    id:1,
    name: 'Windstrom'
  }
}
