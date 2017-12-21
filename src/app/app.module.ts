import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EventsAppComponent } from './events-app.component';
import { EventNavbarComponent } from './navbar/event-navbar.component';
import { Error404Component } from './errors/Error-404.component';

//barrel imports
import { 
  EventRouteActivator,
  EventDetailsComponent,
  EventThumbnailComponent,
  EventsListComponent,
  EventService,
  EventsListResolver,
  CreateEventComponent, 
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService
} 
from './events/index';

import {
  JQ_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
} from './common/index' 

import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { AuthService } from './user/auth.service';

declare let jQuery : Object;

@NgModule({
  //components and directives are declared here
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventNavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    AngularNotesComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
  ],
  //modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  //services
  providers: [
    EventService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    VoterService,
     {
       provide: 'canDeactivateEventCreate',
       useValue: checkDirtyState
     },
     { provide: JQ_TOKEN, useValue: jQuery}
  ],
  //plug in the starting point of the application
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}
//this is used by the CreateEventComponent to display an alert if the user tries to leave the page without saving
function checkDirtyState(component: CreateEventComponent){
  if (component.isDirtyState){
    // returns true or false
    return window.confirm('You have not saved this event, do you really want to cancel');
  }
  return true;
}
