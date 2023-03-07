import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse , HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { Login } from "../shared/login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = new Login();
  baseUrl = "https://localhost:7235/api/Login";
  submitted : boolean = false;

  constructor(private dialog: MatDialog, private http: HttpClient, private router: Router,public Service: LoginService) {
   

  }
  onSubmit() {

    this.submitted = true;
    console.log(this.Service.loginForm.value);
    if (this.Service.loginForm.valid) {
      console.log("Form Valid");
    const headers = { 'content-type': 'application/json'};
    this.http.post(this.baseUrl, this.Service.loginForm.value, {headers}).subscribe(result => {this.router.navigate(['#']);
    console.warn("result",result);
    

  }),(err:HttpErrorResponse)=>{"handle your error here"}
}
  }
  openDialog(){
    this.dialog.open(LoginComponent);
  }

}
