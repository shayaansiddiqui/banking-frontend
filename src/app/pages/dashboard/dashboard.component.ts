import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
	constructor(private Router: Router){
		this.routeComp(this.route);
	}
	today: Date = new Date();
	points: number = 50000;
	accountId: any = 1;
	accountType: any = 'test';
	route:any;
	routeComp(route:any){
		if (route == "accountId") {
			return this.Router.navigate(['summary/accountId']);
		  }
		  
		  return true;
	}
	
	 
}
