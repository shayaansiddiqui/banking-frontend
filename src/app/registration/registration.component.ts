import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert, NgbModal,NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { animate,trigger,transition,style, state } from "@angular/animations";
import { ActivatedRoute, Router  } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Registration } from '../shared/registration';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../shared/registration.service';
import { Subject } from 'rxjs';
import { ToastService } from "../shared/toast.service";

declare var window:any;


declare var $:any;


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent {
  
  
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
  
  constructor(public service:RegistrationService, private modalService: NgbModal,private router: Router, private activeRouter : ActivatedRoute, private dialog: MatDialog, private formBuilder: FormBuilder,public toastService:ToastService) {
  
  }

  onSubmit() {
    this.showSuccess();
    this.submitted = true;
    console.log(this.service.registrationForm.value);
    if (this.service.registrationForm.valid) {
    
      this.service.registerUser().subscribe(res =>{
        console.log('got response !');
        console.log(res);
      // toast messages
      });
    }
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

 ngOnInit() {
 
}

resetForm()
{
  this.service.registrationForm.reset(new Registration());
  this.submitted = false;
}

showStandard() {
 
  this.toastService.show('I am a standard toast', {
    delay: 2000,
    autohide: true
  });
}

showSuccess() {
  this.toastService.show('I am a success toast', {
    classname: 'bg-success text-light ',
    delay: 2000 ,
    autohide: true,
    headertext: 'Toast Header'
  });
}
showError() {
  this.toastService.show('I am a success toast', {
    classname: 'bg-danger text-light',
    delay: 2000 ,
    autohide: true,
    headertext: 'Error!!!'
  });

}

showCustomToast(customTpl :any) {
this.toastService.show(customTpl, {
  classname: 'bg-info text-light',
  delay: 3000,
  autohide: true
});
}

}


