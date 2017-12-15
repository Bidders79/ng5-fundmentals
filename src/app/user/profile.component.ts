import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router/src/directives/router_link';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor (private router:Router, private authService:AuthService){

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, 
                                    [Validators.required, Validators.pattern("[a-zA-Z]*")])
    this.lastName = new FormControl(this.authService.currentUser.lastName,
                                    [Validators.required, Validators.pattern("[a-zA-Z]*")])

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  //return true if valid or untouched
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }
  
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  cancel(){
    this.router.navigate['events'];
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, 
                                         formValues.lastName);
      this.router.navigate['events'];
    }
  }

}
