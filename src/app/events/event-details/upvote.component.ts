import { Component, Output, Input } from "@angular/core";
import { EventEmitter } from "events";

@Component({
    selector: 'upvote',
    template:
    `<div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButtton">
                <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
                <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
            </div>
            <div class="badge badge-inverse votingCount">
                <div>{{count}}</div>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent{
    @Input() count: number;
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();
}