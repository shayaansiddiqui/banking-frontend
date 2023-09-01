import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {UserModel} from "../model/User.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	/**
	 * Private Variables
	 * url          - URL To API Service
	 * JwtHelper    - Helper Service To Encode/Decode JWT Tokens
	 * decodedToken - Temporarily stores decoded JWT token
	 * isLogin      - Observable which shares data between all observers
	 * userSubject  - Observable which shares data between all observers
	 * user         - Observable which shares data between all observers
	 */
	url = environment.baseUrl + "Authentication/";
	API_ENDPOINT = 'https://localhost:7235/api/'
	JwtHelper = new JwtHelperService();
	decodedToken: any;
	isLogin = new BehaviorSubject<boolean>(false);
	userSubject = new BehaviorSubject<UserModel | null>(null);
	user = this.userSubject.asObservable();
	ipAddress = "";

	/**
	 * Constructor
	 * @param http  - Dependency Injection of HttpClient
	 *                Used to get, post or update records
	 */
	constructor(private httpClient: HttpClient) {
		this.isLoggedIn();
	}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		let localUser = localStorage.getItem('user');
		if (localUser) {
			// this.userSubject = new BehaviorSubject<UserModel>(JSON.parse(localUser));
			this.user = this.userSubject.asObservable();
		}
	}

	/**
	 * isLoggedIn
	 * Decodes JWT Token
	 * Returns token if not expired
	 */
	isLoggedIn() {
		const token = localStorage.getItem('token');
		if (token) {
			this.decodedToken = this.JwtHelper.decodeToken(token);
		}
		return token && !this.JwtHelper.isTokenExpired(token);
	}


	updateForgotPass(data: any, body: any) {
		return this.httpClient.post(this.API_ENDPOINT + data, body);
	}

	forgotPasswordDataGet(data: any, id: any) {
		return this.httpClient.get(this.API_ENDPOINT + data + id);
	}

	/**
	 * getToken
	 * Retrieves the token from local storage
	 */
	getToken() {
		return localStorage.getItem('token');
	}
}
