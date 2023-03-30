import {Component, Input, OnInit} from '@angular/core';
import {animate, query, style, transition, trigger} from '@angular/animations';
import {ChildrenOutletContexts} from "@angular/router";
import {environment} from "../../../environments/environment";
import { AuthenticationService } from 'src/app/services/authentication.service';


const enterTransition = trigger('routeAnimations', [
	transition('* <=> *', [
		// Set a default  style for enter and leave
		query(':enter, :leave', [
			style({
				position: 'absolute',
				left: 0,
				width: '100%',
				opacity: 0,
				transform: 'scale(0) translateY(100%)',
			}),
		], {optional: true}),
		// Animate the new page in
		query(':enter', [
			animate('600ms ease', style({opacity: 1, transform: 'scale(1) translateY(0)'})),
		], {optional: true})
	]),
]);

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	animations: [enterTransition,

		// transformer,
		// fader,
		// slider,
		// stepper
	]
})

export class HeaderComponent implements OnInit {
	applicationName: any;
	@Input()
	submitted: boolean = true;
	constructor(private contexts: ChildrenOutletContexts, public AuthenticationService: AuthenticationService) {
		this.applicationName = environment.applicationName;
	}

	getRouteAnimationData() {
		return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
	}

	ngOnInit() {
		}

		childData($event : any)
		{
			console.log("Tst - tst");
				console.log($event);
		}
}
