import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
  <div>
    <p>
      <app-event-navbar></app-event-navbar>
      <router-outlet></router-outlet>
    </p>
  </div>
`
})
export class EventsAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
