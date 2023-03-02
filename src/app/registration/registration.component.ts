import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { animate,trigger,transition,style, state } from "@angular/animations";
import { ActivatedRoute, Router  } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


declare var window:any;



export class User {
  public name!: string;
  public email!: string;
  public password!: string;
  public hobbies!: string;
  public addressline1!: string;
  public addressline2!: string;
  public zip!:number;
  public show!:string;
}
import { NgClass } from '@angular/common';
declare var $:any;


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent {
  model = new User();
  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking',
  ];
  formModal : any;
  isShow = false;

  constructor(private modalService: NgbModal,private router: Router, private activeRouter : ActivatedRoute, private dialog: MatDialog) {}
  
 
  onSubmit(form: any) {
   // console.log(form.value);
  }

  showModal(element?:any) {
  }

  openWindowCustomClass(content:any) {
    console.log("clicked !");
    this.isShow = !this.isShow;
    this.router.navigate(['/Login']);
	}

  //  openDialog(){
  //    this.dialog.open(LoginComponent);
  //  }
}


