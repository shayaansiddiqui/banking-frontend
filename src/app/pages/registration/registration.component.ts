import { Component } from '@angular/core';
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";
import {RegistrationService} from "../../shared/registration.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder,FormControl} from "@angular/forms";
import {ToastService} from "../../services/toast.service";
import {LoginComponent} from "../login/login.component";
import {Registration} from "../../shared/registration";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressApiDto } from "../../model/AddressApiDto";
import { HttpClient, HttpErrorResponse , HttpHeaders  } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  addressInput = true;
  apiModel : AddressApiDto[] = [];
  JsnObje : any = {};
  baseUrl = "https://localhost:7235/api/BankCustomer";
  bsValue = new Date();
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
  FormControl: any;

  constructor(public service: RegistrationService, private modalService: NgbModal, private router: Router, private activeRouter: ActivatedRoute, private dialog: MatDialog, private formBuilder: FormBuilder, public BsDatepickerConfig: BsDatepickerConfig, public toastService: ToastService, private HttpClient: HttpClient,public MatAutocompleteModule: MatAutocompleteModule) {
    this.datepickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue'})
  
 
  
    this.bsValue.setFullYear(this.bsValue.getFullYear() - 20);
    console.log(this.bsValue);
  }

  onSubmit() {
    this.showSuccess();
    this.submitted = true;
     console.log(this.service.registrationForm.value);
    alert("onSubmit");
    if (this.service.registrationForm.valid) {
      alert("registrationForm");
      //this.service.registerUser();
      this.showSuccess();

    }
    else{
      this.showError();
    }
  }

  showModal(element?: any) {
  }

  GetAddressSugestions(search :any)
  {
    //this.isDisabled = !this.isDisabled;
    
      if (search.length > 2) {

  const headers = { 'content-type': 'application/json'};
   //console.log("Register User");
    this.HttpClient.get("https://api.geoapify.com/v1/geocode/autocomplete?text="+search+"&lang=en&limit=5&filter=countrycode:us&format=json&apiKey=4b4eccb5b9c84d1a990c8241de9d159f", {headers}).subscribe(data => {
    this.JsnObje  = data;
<<<<<<< HEAD
    
    console.log(data);
for(let i of this.JsnObje.results)
{
  this.apiModel.push(i); 
  console.log(i);
}
});
}
=======
    this.apiModel = []; 
      for(let i of this.JsnObje.results)
      {
        this.apiModel.push(i); 
        console.log(i);
      }
      this.addressInput = true;
      });
      }
>>>>>>> 400b15ec47329872b644da91028cfc41c1c1e17b
  }


  openWindowCustomClass(content: any) {
    //console.log("clicked !");
    this.isShow = !this.isShow;
    this.router.navigate(['/Login']);
  }

  openDialog() {
    this.dialog.open(LoginComponent);
  }

   getFullName(value:any) {

    console.log(value[0].street);
    
    return value[0];
  }

  ngOnInit() {

  }

  resetForm() {
    this.service.registrationForm.reset(new Registration());
    this.submitted = false;
  }

  Setfields(cityname:string,statename:string,address:string,zipcode:string)
  {
    //console.log(cityname + " "+ statename);
    this.addressInput = false;
    this.service.registrationForm.patchValue(
      {
        city:cityname,
        state:statename,
        address:address,
        postalCode:zipcode
      }
    );
    this.service.registrationForm.updateValueAndValidity();

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
