import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../index';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';
  
  constructor(private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id'])
    })
    this.addMode = false;
  }

  addSession(){
    this.addMode = true;
  }

  saveNewSession(session: ISession){
    //get the last session id
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));  
    //increment the id, assign it to the new session and add it to the events sessions
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event)
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode = false;
  }
}
