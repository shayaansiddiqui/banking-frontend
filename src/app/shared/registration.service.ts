import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {
	HttpClient,
	HttpErrorResponse,
	HttpParams,
	HttpHeaders,
} from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class RegistrationService {
	readonly baseUrl = 'https://localhost:7235/api/BankCustomer';
	registrationForm = this.fb.group({
		id: [0],
		firstName: ['', [Validators.required, Validators.maxLength(10)]],
		lastName: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]],
		password: ['', [Validators.required, Validators.minLength(6)]],
		city: ['', Validators.required],
		state: ['', Validators.required],
		dateOfBirth: ['', Validators.required],
		postalCode: ['', Validators.required],
		phone: ['', Validators.required],
		address: ['', Validators.required],
		fatherEmail: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]],
		country: ['', Validators.required],
		status: [true, Validators.required],
	});

	constructor(private fb: FormBuilder, private http: HttpClient) {
	}

	registerUser() {
		debugger
		console.log('www => ', this.registrationForm);
		const headers = {'content-type': 'application/json'};
		this.http.post(this.baseUrl, this.registrationForm.value, {headers}).subscribe((result) => {
			console.log('result => ', result);
			this.registrationForm.reset()
			console.error(result);
		});
	}

	// private handleError(error: HttpErrorResponse) {
	//   if (error.status === 0) {
	//     // A client-side or network error occurred. Handle it accordingly.
	//     console.error('An error occurred:', error.error);
	//   } else {
	//     // The backend returned an unsuccessful response code.
	//     // The response body may contain clues as to what went wrong.
	//     console.error(
	//       `Backend returned code ${error.status}, body was: `, error.error);
	//   }
	//   // Return an observable with a user-facing error message.
	//   return throwError(() => new Error('Something bad happened; please try again later.'));
	// }
}
