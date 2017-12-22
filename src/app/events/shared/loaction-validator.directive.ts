import { Directive } from "@angular/core";
import { FormGroup, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[validateLocation]',
    // add the new Validator to the existing list of validators in the service
    //bby setting Multi to true
    providers: [{ 
        provide: NG_VALIDATORS, 
        useExisting: LocationValidator, 
        multi: true
    }]

})
export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any; } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        /* this reflects the DOM tree but doesn't include all the controls
            so currently we are on - <div ngModelGroup="location" validateLocation>
            and we need to get a form group from the root html and its control of onlineUrl
            //strongly typed as FormGroup
        */
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];
                
        if((addressControl && addressControl.value && 
            cityControl && cityControl.value
            && countryControl && countryControl.value) || 
            (onlineUrlControl && onlineUrlControl.value))
            {
                //return nothing - validation passed
                return null;
            }else{
                //failed validation
                return {validateLocation:false}
            }

    }
    
}