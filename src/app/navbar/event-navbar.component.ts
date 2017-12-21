import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { FormsModule} from '@angular/forms'
import { ISession, EventService } from '../events/index';


@Component({
  selector: 'app-event-navbar',
  templateUrl: './event-navbar.component.html',
  styleUrls: ['./event-navbar.component.css']
})
export class EventNavbarComponent implements OnInit {
  searchTerm: string = ""; // 2 way binding property
  foundSessions: ISession[];
  
  constructor(private authService: AuthService, private eventService: EventService) { 
  }

  ngOnInit() {
  }

  //return an observable
  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe
    (sessions => { 
       this.foundSessions = sessions;
       console.log(this.foundSessions);
    })
  }

}
