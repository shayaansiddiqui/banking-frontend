import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { animate,trigger,transition,style, state } from "@angular/animations";
import { ActivatedRoute, Router  } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { HttpClient, HttpErrorResponse , HttpHeaders  } from '@angular/common/http';
import { Registration } from '../shared/registration';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../shared/registration.service';

declare var window:any;


declare var $:any;


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent {
  baseUrl = "https://localhost:7235/api/BankCustomer";
 submitted : boolean = false;

   State: string[] = [
    'Alabama',
    'Alaska',
    'Arizona'
  ];
 
   Cities: string[] = [
     'Mohali',
     'Chandigarh',
     'Patiala'
   ];
  formModal : any;
  isShow = false;
  
  constructor(public service:RegistrationService, private modalService: NgbModal,private router: Router, private activeRouter : ActivatedRoute, private dialog: MatDialog, private http: HttpClient, private formBuilder: FormBuilder) {
  
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.service.registrationForm.value);
    if (this.service.registrationForm.valid) {
      const headers = { 'content-type': 'application/json'};
        this.http.post(this.baseUrl, this.service.registrationForm.value, {headers}).subscribe(result => {
        console.warn("result",result);
        
      }),(err:HttpErrorResponse)=>{"handle your error here"}
    }
    
    // this.model.id = 0;
    // this.model.firstName = data.value.firstName;
    // this.model.lastName = data.value.lastName;
    // this.model.email = data.value.email;
    // this.model.password = data.value.password;
    // this.model.address = data.value.address;
    // this.model.city = data.value.city;
    // this.model.state = data.value.state;
    // this.model.postalCode = data.value.postalCode;
    // this.model.phone = data.value.phone;
    //  this.model.dateOfBirth =  data.value.dateOfBirth.month +"/"+ data.value.dateOfBirth.day + "/" + data.value.dateOfBirth.year;
    //  this.model.country = "";
    // this.model.status = true;

  

    
  }
  
  showModal(element?:any) {
  }

  openWindowCustomClass(content:any) {
    console.log("clicked !");
    this.isShow = !this.isShow;
    this.router.navigate(['/Login']);
	}

    openDialog(){
     this.dialog.open(LoginComponent);
   }
//    register(user:any){
//     return this.http.post(this.baseUrl +'registration',user);
//  }
 ngOnInit() {
 
}

}


