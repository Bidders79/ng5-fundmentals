import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IEvent } from '../index';

@Component({
  selector: 'app-event-thumbnail',
  template: `
          <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
          <h2>{{event.name | uppercase}}</h2>
          <div>Date: {{event.date | date:'shortDate'}}</div>
          <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
          </div>
          <div *ngIf='event?.location'>
            Price: {{ event.price | currency:'GBP':true }}
          </div>
          <div>
            <span>Location: {{event.location.address}}</span>

            <span>{{event.location.city}}, {{event.location.country}}</span>
          </div>
          <div *ngIf='event.onlineUrl'>Online Url: {{event.onlineUrl}}</div>
          <br/>

        </div>
  `,
  // <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
  styles: [
    `
    .pad-left { margin-left: 10px; }
    .wel div { color: #bbb; }
    .fontcolor{
      color: white;
    }
    .bold{
      font-weight: bold;
    }
    `
  ]
})
export class EventThumbnailComponent implements OnInit {

  //no type - plain javascript (any)
  @Input() event: IEvent;

  // someProperty: any = "some prop text";
  @Output() eventClick = new EventEmitter();

  // logfoo(){
  //   console.log('foo logged');
  // }
  // handleClickMe(){
  //   console.log('clicked');
  //   this.eventClick.emit(this.event.name);
  // }

  constructor() { }

  ngOnInit() {
  }

  getStartTimeClass(){
    //const isEarlyStart = this.event && this.event.time === '8:00 am';

   // return {fontcolor: isEarlyStart, bold: isEarlyStart}

   if (this.event && this.event.time === '8:00 am'){
     return ['fontcolor', 'bold'];
   }
   return [];
  }

}

