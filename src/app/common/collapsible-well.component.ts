import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    //using attributes to tell Angular where to ouput the content
    template: `
        <div (click)="toggleContent()" class="collapsible-well">
            <h4>
                <ng-content select="[well-title]"></ng-content>
            </h4>
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        </div>
    `,
    styles: [`.collapsible-well
        { background-color: darkblue;
            padding: 20px;
            margin-top: 20px;
        }`]

})

export class CollapsibleWellComponent {
    visible: boolean = true;

    toggleContent(){
        this.visible = !this.visible;
    }
}