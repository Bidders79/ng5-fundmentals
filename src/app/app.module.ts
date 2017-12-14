import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{
  EventService,
  CreateEventComponent,
  EventsListResolver,
  EventThumbnailComponent,
  EventRouteActivator,
  EventDetailsComponent,
  EventsListComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { EventNavbarComponent } from './navbar/event-navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/Error404.component';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventNavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    {
      provide: 'canDeactivateEventCreate',
      useValue: checkDirtyState
    },
    EventsListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { 
}

function checkDirtyState(component:CreateEventComponent){
  if(component.isDirtyState)
    //returns true or false
    return window.confirm('You have not saved this event, do you really want to cancel');
  return true;
}
