import {Component} from '@angular/core';
import {Transaction} from "../../../model/Transaction";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  transactions!: Transaction[];

  constructor() {
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
