import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession, RestrictedWords } from '../index';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    em{
      float:right;
      color: darkred;
      padding-left: 10px;
    }
    .error input .error textarea .error select {
        background-color: rgb(236, 29, 43);
    }
    .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :ms-input-placeholder {color: #999}
`]
})
export class CreateSessionComponent implements OnInit {
  @Output()saveNewSession = new EventEmitter()
  @Output()cancelAddSession = new EventEmitter()
  
  newSessionForm: FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level:FormControl
  abstract:FormControl
  
  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, 
                                        Validators.maxLength(400), 
                                        RestrictedWords(['foo', 'bar'])])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  } 
  
  saveSession(formValues){
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    this.saveNewSession.emit(session)
  }
  cancel(){
    this.cancelAddSession.emit();
  }

}
