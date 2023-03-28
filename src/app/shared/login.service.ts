import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	loginForm: any;

	constructor(private fb: FormBuilder) {
		this.loginForm = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		})
	}
}
