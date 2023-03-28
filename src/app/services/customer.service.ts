import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/User.model";

@Injectable({
	providedIn: 'root'
})
export class CustomerService {
	/**
	 * Private Variables
	 * url          - URL To API Service
	 */
	url = "Customer/";

	constructor(private httpClient: HttpClient) {
	}

	/**
	 * getCustomerById
	 * @param customerId - accepts the customer number
	 */
	getEmployeeById(customerId: number) {
		return this.httpClient.post(this.url + 'Login', customerId);
	}

	/**
	 * createNewCustomer
	 * @param model - Registration Form used to create new account
	 */
	createNewCustomer(model: UserModel) {
		return this.httpClient.post(this.url + "Create", model);
	}
}
