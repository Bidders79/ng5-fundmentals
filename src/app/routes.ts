import {Routes} from '@angular/router'

import{
    EventsListComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventsListResolver,
    CreateEventComponent
  } from './events/index'

import { Error404Component } from './errors/Error404.component';

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateEventCreate']},

    /*when the url is reolved to this route, 
    trigger the Event List resolver Service to load events into a variable called events
    this will not resolve until the events have been loaded
    */
    {path: 'events', component: EventsListComponent, resolve: { events:EventsListResolver }},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo:'/events', pathMatch: 'full'},
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
    
]