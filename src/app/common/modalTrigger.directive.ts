import {Directive, OnInit, Inject, ElementRef} from '@angular/core'
import { JQ_TOKEN } from './jQuery.service';
import { FormsModule } from '@angular/forms';


//similar to a component, but uses the css seletor syntax rather than an element 
@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective{
    
    //craete a global java element type
    private htmlEl: HTMLElement;

    //ElementRef - this passes in the current html element that the attribute directive selector is called from, so navbar  - button element
    constructor(elRef: ElementRef, @Inject(JQ_TOKEN) private $ : any){
        
        //get the actual element from the DOM from the reference parsed in
        this.htmlEl = elRef.nativeElement;
    }

    ngOnInit(){
        //add an event listner to the html element (button) and call the modal on this raised event
        this.htmlEl.addEventListener('click', e => {
            alert('this should show a modlal container');
            this.$('#modalconatiner').modal('show');
        });
        
    }
}