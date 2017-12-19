import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EventsAppComponent } from './events-app.component';
import { EventNavbarComponent } from './navbar/event-navbar.component';
import { ToastrService } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
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
  DurationPipe
} 
from './events/index';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { AuthService } from './user/auth.service';


@NgModule({
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
     {
       provide: 'canDeactivateEventCreate',
       useValue: checkDirtyState
     },
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

function checkDirtyState(component: CreateEventComponent){
  if (component.isDirtyState){
    // returns true or false
    return window.confirm('You have not saved this event, do you really want to cancel');
  }
  return true;
}
