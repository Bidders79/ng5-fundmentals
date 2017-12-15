import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormControl, FormGroup } from '@angular/forms'
import { EventService } from './event.service';

@Component({
    selector: 'app-create-event',   
    templateUrl: './create-event.component.html',
    styles: [
    `em{
        float:right;
        color: darkred;
        padding-left: 10px;
    }
    .error input 
    {
        background-color: rgb(236, 29, 43);
    }
    .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :ms-input-placeholder {color: #999}
    `
    ]
})

export class CreateEventComponent implements OnInit {

    isDirtyState = true;
    constructor(private router: Router, private eventService:EventService){

    }
    saveEvent(formValues){
        this.eventService.saveEvent(formValues);
        this.isDirtyState = false;
        this.router.navigate(['/events']);
    }
    ngOnInit(): void {
        console.log("initializing");
    }
    //return users to the events page
    cancel(){
        this.router.navigate(['/events']);
    }
}

