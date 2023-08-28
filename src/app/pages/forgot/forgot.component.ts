import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    public router: Router
  ) { 
    this.formData()
   }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      console.log('Check Form => ', this.loginForm.value);
      this.auth.forgotPasswordDataGet('BankCustomer/', this.loginForm.value.email).subscribe(
        (response: any) =>{
          this.router.navigate(['/update-password']);
            console.log('res => ', response);
          },
          error => {
            console.log('err => ', error);
          }
        );
    } else {
      console.log('Form is not valid');
    }
  }

  formData(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]],
    });
  }
}
