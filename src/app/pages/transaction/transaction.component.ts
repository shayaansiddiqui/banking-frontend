import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'app-transaction',
	templateUrl: './transaction.component.html',
	styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
	//variables to store account and accountType.
	id!: string;
	accountType!: string;

	constructor(private route: ActivatedRoute) {
	}

	//Below is how to retrieve the id and account type from router and store them in variables
	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id')!;
		this.accountType = this.route.snapshot.paramMap.get('accountType')!;
		console.log("id -> ", this.id);
		console.log("accountType -> ", this.accountType);
	}

}
