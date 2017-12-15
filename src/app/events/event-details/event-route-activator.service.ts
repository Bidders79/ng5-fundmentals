import { Component, Injectable } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventService} from '../shared/event.service';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate{


    constructor(private eventService: EventService,
        private router: Router){
    }

    canActivate(route: ActivatedRouteSnapshot ): boolean{

        const eventExists = !!this.eventService.getEvent(route.params['id']);
        if (!eventExists){
            this.router.navigate(['/404']);
        }

            return eventExists;
    }


}
