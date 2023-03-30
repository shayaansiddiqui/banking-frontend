import {Component, EventEmitter, Output} from '@angular/core';
import {Login} from "../../shared/login";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginService} from "../../shared/login.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	model = new Login();
	baseUrl = "https://localhost:7235/api/BankCustomer/";
	submitted: boolean = false;
	err: any;
	loginForm: any;
	// @Output() myData = new EventEmitter<any>();
	// @Output() myData: EventEmitter<any> = new EventEmitter<any>();

	constructor(private dialog: MatDialog, private http: HttpClient, public router: Router, public Service: LoginService) {
		this.onSubmit();
	}

	onSubmit() {

		this.submitted = true;
		console.log(this.Service.loginForm.value);
		if (this.Service.loginForm.valid) {
			//console.log("Form Valid");
			const headers = {'content-type': 'application/json'};
			//let queryParams = new HttpParams().set('email',this.Service.loginForm.email);
			//console.log(this.Service.loginForm.value.email);
			
			this.http.get(this.baseUrl + this.Service.loginForm.value.email).subscribe(result => {
				
				//this.router.navigate(['dashboard']);
				//console.warn("result", result);

				if(result != null)
				{
					this.router.navigate(['dashboard']);
				}
			})
			, (err: HttpErrorResponse) => {
				console.log(err.message);
			}
		//	this.myData.emit("Testing");
		}
		// var user = localStorage.setItem('currentUser', JSON.stringify(this.loginForm.email));
		// 	this.submitted = true;
		// 	console.log(user);
		
	}

	openDialog() {
		this.dialog.open(LoginComponent);
	}
}
