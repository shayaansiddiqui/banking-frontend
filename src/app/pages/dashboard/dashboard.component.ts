import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
	constructor(private Router: Router, private AuthenticationService: AuthenticationService,) {
	}

	login: any;
	today: Date = new Date();
	points: number = 50000;
	accountId: any = 1;
	accountType: any = 'test';

	canActivate(
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.checkLoggedIn(state.url);
	}

	checkLoggedIn(url: string): boolean {
		if (this.AuthenticationService.isLoggedIn()) {
			return true;
		}
		this.Router.navigate(['/login']);
		return false;
	}


}
