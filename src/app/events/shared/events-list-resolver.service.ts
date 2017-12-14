import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { Resolve } from '@angular/router';

@Injectable()
export class EventsListResolver implements Resolve<any> {
 
  constructor(private eventService:EventService) { 
  }

  resolve(){
    return this.eventService.getEvents().map(events => events)
  }
}
