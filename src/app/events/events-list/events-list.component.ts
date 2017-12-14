import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';
import { Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-events-list',
  template: `
    <div class='header'>
    <h1>Upcoming Angular 5 Events</h1>
      <hr />   
      
      <div class='row'>
        <div *ngFor='let event of events' class='col-md-5'>
          <app-event-thumbnail (click)='handleThumbnailClick(event.name)'
          [event]='event'></app-event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  
  events:any

  constructor(private eventService: EventService, 
              private toatsr: ToastrService,
              private route:ActivatedRoute ) { 
    
  }

  ngOnInit() {
    //this.eventService.getEvents().subscribe(events => { this.events = events });
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName){
    this.toatsr.success(eventName)
  }

}
