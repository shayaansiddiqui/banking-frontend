import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { animate,trigger,transition,style, state } from "@angular/animations";
import { ActivatedRoute, Router  } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { HttpClient, HttpErrorResponse , HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

declare var window:any;



export class User {
  public id!:number;
  public fName!: string;
  public lName!: string;
  public email!: string;
  public password!: string;
  public address!: string;
  public city!: string;
  public state!: string;
  public postalCode!:string;
  public phone!:string;
  public fax!:string;
  public faxNumber!:string;
  public status!:boolean;
}
declare var $:any;


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent {
  baseUrl = "https://localhost:7235/api/BankCustomer";
  model = new User(
    
  );
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
  
  constructor(private modalService: NgbModal,private router: Router, private activeRouter : ActivatedRoute, private dialog: MatDialog, private http: HttpClient, private formBuilder: FormBuilder) {
  
  }

  onSubmit(data : any) {
    console.log(data.value);
    this.model.id = 0;
    this.model.fName = data.value.firstName;
    this.model.lName = data.value.lastName;
    this.model.email = data.value.email;
    this.model.password = data.value.password;
    this.model.address = data.value.address;
    this.model.city = data.value.city;
    this.model.state = data.value.state;
    this.model.postalCode = data.value.postalCode;
    this.model.phone = data.value.phone;
    this.model.fax = data.value.fax;
    this.model.faxNumber = data.value.faxNumber;
    this.model.status = true;

    const headers = { 'content-type': 'application/json'};
    
    console.log(this.model);

    this.http.post(this.baseUrl, this.model, {headers}).subscribe(result => {
    console.warn("result",result);
    
  }),(err:HttpErrorResponse)=>{"handle your error here"}
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

registerForm = new FormGroup({
  id: new FormControl("", [Validators.required]),
  email: new FormControl("", [Validators.required]),


})
}


