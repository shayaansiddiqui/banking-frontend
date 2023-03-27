import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../../model/Transaction";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions!: Transaction[];
	id!: string;
	accountType!: string;
	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id')!;
		this.accountType = this.route.snapshot.paramMap.get('accountType')!;
		console.log("id ->", this.id);
		console.log("accountType ->", this.accountType)
	}

  constructor(private route: ActivatedRoute) {
    this.transactions = [{
      id: 1,
      date: new Date(),
      reference: 123,
      name: 'Nintendo Switch Game',
      amount: 12.99
    },
      {
        id: 1,
        date: new Date(),
        reference: 123,
        name: 'Nintendo Switch Game',
        amount: 12.99
      },
      {
        id: 1,
        date: new Date(),
        reference: 123,
        name: 'Nintendo Switch Game',
        amount: 12.99
      },
      {
        id: 1,
        date: new Date(),
        reference: 123,
        name: 'Nintendo Switch Game',
        amount: 12.99
      }]
  }
}
