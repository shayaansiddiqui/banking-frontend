import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent {
	applicationName: any;
	copyrightYear: any;

	constructor() {
		this.applicationName = environment.applicationName;
		this.copyrightYear = new Date().getFullYear();
	}

}
