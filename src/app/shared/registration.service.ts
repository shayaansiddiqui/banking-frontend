import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse , HttpHeaders  } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
    readonly baseUrl = "https://localhost:7235/api/BankCustomer";

  constructor(private fb : FormBuilder,private http : HttpClient) { }
  registrationForm = this.fb.group({
      id:[0],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      postalCode:['',Validators.required],
      phone:['',Validators.required],
      dateOfBirth:['',Validators.required],
      address : ['']
  })
   

registerUser()
{
      const headers = { 'content-type': 'application/json'};
      // console.log("Register User");
    this.http.post(this.baseUrl, this.registrationForm.value, {headers}).subscribe(result => 
      console.log("Testing "), err => {
        console.error(err);
        this.handleError(err);
    });
      // if (!result.error) {
      //   {
      //     this.showSuccess();    
      //   }
      //   else {
      //     this.showError();
      //   }
      // }
};


private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
   
}



