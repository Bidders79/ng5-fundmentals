import { Pipe, PipeTransform} from '@angular/core'


//this is the name of the pipe that gets called from the html template
@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform{
    //has to implement transform
    transform(value: number):string {
        switch(value){
            case 1: return 'Half Hour'
            case 2: return 'One Hour'
            case 3: return 'Half Day'
            case 4: return 'Full Day'
            default: return value.toString();
        }
    }
    
}