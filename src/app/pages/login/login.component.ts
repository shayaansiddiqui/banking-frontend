import {Component} from '@angular/core';
import {Login} from "../../shared/login";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginService} from "../../shared/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = new Login();
  baseUrl = "https://localhost:7235/api/Login";
  submitted: boolean = false;
  err: any;
  loginForm: any;

  constructor(private dialog: MatDialog, private http: HttpClient, private router: Router, public Service: LoginService) {
    this.onSubmit();
  }

  onSubmit() {

    this.submitted = true;
    console.log(this.Service.loginForm.value);
    if (this.Service.loginForm.valid) {
      console.log("Form Valid");
      const headers = {'content-type': 'application/json'};
      this.http.post(this.baseUrl, this.Service.loginForm.value, {headers}).subscribe(result => {
        this.router.navigate(['#']);
        console.warn("result", result);


      }), (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    }
  }

  openDialog() {
    this.dialog.open(LoginComponent);
  }
}
