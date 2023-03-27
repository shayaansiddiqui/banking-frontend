import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
	id!: string;
	accountId: any = 1;
	accountType: any = 'test';

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id')!;
		console.log("id ->", this.id);
	}
}
