import {Component, Input, ViewChild, ElementRef, Inject} from '@angular/core'
import { JQ_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: 'simpleModal.component.html',
    styles: [`
        .modal.body { height: 250px; overflow-y: scroll; }
    `]
})

export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    //ViewChild is used to access an element conatineing a certain ref
    //viewChildren can also be used if yo need access to a list of elements 
    @ViewChild('modalcontainer') containerEl: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $:any){}

    closeModal(){
        if(this.closeOnBodyClick.toLocaleLowerCase() === 'true'){
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}

