import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-update-password',
	templateUrl: './update-password.component.html',
	styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
	updateForm!: FormGroup;

	password = new FormControl(null, [
		(c: AbstractControl) => Validators.required(c)
	]);
	UpdatePassword = new FormControl(null, [
		(c: AbstractControl) => Validators.required(c)
	]);

	constructor(
		private fb: FormBuilder,
		public auth: AuthenticationService,
		public router: Router
	) {
		this.formData()
	}

	onSubmit() {
		this.updateForm.markAllAsTouched();
		console.log('Check Form => ', this.updateForm);
		if (this.updateForm.valid) {
			console.log('Check Form => ', this.updateForm.value);
			this.auth.updateForgotPass('BankCustomer/', this.updateForm.value).subscribe(
				(response: any) => {
					debugger
					this.router.navigate(['/login']);
					console.log('res => ', response);
				},
				error => {
					console.log('err => ', error);
				}
			);
		} else {
			console.log('Form is not valid');
		}
	}

	formData() {
		this.updateForm = this.fb.group({
				password: this.password,
				UpdatePassword: this.UpdatePassword,
			},
			{
				validator: this.ConfirmedValidator('password', 'UpdatePassword'),
			}
		);
	}

	ConfirmedValidator(controlName: string, matchingControlName: string) {
		return (formGroup: FormGroup) => {
			const control = formGroup.controls[controlName];
			const matchingControl = formGroup.controls[matchingControlName];
			if (
				matchingControl.errors &&
				!matchingControl.errors.confirmedValidator
			) {
				return;
			}
			if (control.value !== matchingControl.value) {
				matchingControl.setErrors({confirmedValidator: true});
			} else {
				matchingControl.setErrors(null);
			}
		};
	}
}
