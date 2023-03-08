import { Component } from '@angular/core';
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";
import {RegistrationService} from "../../shared/registration.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {ToastService} from "../../services/toast.service";
import {LoginComponent} from "../login/login.component";
import {Registration} from "../../shared/registration";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  baseUrl = "https://localhost:7235/api/BankCustomer";
  datepickerConfig: Partial<BsDatepickerConfig>;
  submitted: boolean = false;

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
  formModal: any;
  isShow = false;

  constructor(public service: RegistrationService, private modalService: NgbModal, private router: Router, private activeRouter: ActivatedRoute, private dialog: MatDialog, private formBuilder: FormBuilder, public BsDatepickerConfig: BsDatepickerConfig, public toastService: ToastService) {
    this.datepickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue'})
  }

  onSubmit() {
    this.showSuccess();
    this.submitted = true;
    // console.log(this.service.registrationForm.value);

    if (this.service.registrationForm.valid) {

      this.service.registerUser();
      this.showSuccess();

    }
  }

  showModal(element?: any) {
  }

  openWindowCustomClass(content: any) {
    console.log("clicked !");
    this.isShow = !this.isShow;
    this.router.navigate(['/Login']);
  }

  openDialog() {
    this.dialog.open(LoginComponent);
  }

  ngOnInit() {

  }

  resetForm() {
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
    this.toastService.show('Successfully !, Your account is Registered', {
      classname: 'bg-success text-light ',
      delay: 2000,
      autohide: true,
      headertext: 'Toast Header'
    });
  }

  showError() {
    this.toastService.show('I am a success toast', {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: true,
      headertext: 'Error!!!'
    });

  }

  showCustomToast(customTpl: any) {
    this.toastService.show(customTpl, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }
}
