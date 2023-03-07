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
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      postalCode:['',Validators.required],
      phone:['',Validators.required],
      dateOfBirth:['',Validators.required]
  })
   }
}
