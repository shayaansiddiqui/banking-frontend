import {animate, query, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core'
import {Title} from "@angular/platform-browser";
import {environment} from "../environments/environment";

//import { slider, transformer, fader, stepper} from '@angular/animations';


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
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [enterTransition,

		// transformer,
		// fader,
		// slider,
		// stepper
	]
})


export class AppComponent {
	title = environment.applicationName;

	constructor(title: Title) {
		title.setTitle(this.title);
	}

	// getRouteAnimationData() {
	//   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
	// }

	sum() {
		return 10;
	}


}


