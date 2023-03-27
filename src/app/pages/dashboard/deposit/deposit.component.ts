import {Component, OnInit} from '@angular/core';
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";

@Component({
	selector: 'app-deposit',
	templateUrl: './deposit.component.html',
	styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
	bsValue = new Date();
	datepickerConfig: Partial<BsDatepickerConfig>;

	constructor(public BsDatepickerConfig: BsDatepickerConfig) {
		this.datepickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue'})
	}

	ngOnInit(): void {
	}
}
