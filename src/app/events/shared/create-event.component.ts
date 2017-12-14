import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-event',
        template: `
        <h1>New Event</h1>
        <hr>
        <div clas = "col-md-6">
            <h3>[Create Event Form will got here]</h3>
            <br/>
            <br/>
            <button type="sumbit" class="btn btn-primary">Save</button>
            <button type="sumbit" class="btn btn-default" (click)="cancel()">Cancel</button>
        </div>    
    `
    
})

export class CreateEventComponent implements OnInit {
    
    isDirtyState:boolean = true;
    constructor(private router: Router){

    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    //return users to the events page
    cancel(){
        this.router.navigate(['/events'])
    }
}

