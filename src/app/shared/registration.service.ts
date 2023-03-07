import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registrationForm : any;
  constructor(private fb : FormBuilder) {
  this.registrationForm = this.fb.group({
      id:[0],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      address:[''],
      city:[''],
      state:[''],
      postalCode:[''],
      phone:[''],
      dateOfBirth:['']
  })
   }
}
