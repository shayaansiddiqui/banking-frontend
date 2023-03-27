import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
	id!: string;


	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id')!;
		console.log("id ->", this.id);
	}
}
