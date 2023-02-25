import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private modalService: NgbModal) {}
  onSubmit(form: any) {
    console.log(form.value);
  }

  showModal(element?:any) {
		
  }

  // openModal(){
  //   this.formModal.show();
  // }

  openWindowCustomClass(content:any) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

}
